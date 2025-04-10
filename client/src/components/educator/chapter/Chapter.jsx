import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Chapter.css";
import { Link } from "react-router-dom";

const proxy = import.meta.env.VITE_API_URL;

const Chapter = ({ chapter }) => {
  const [lessons, setLessons] = useState([]);
  const [lessonId, setLessonId] = useState([]);
  const [editChapter, setEditChapter] = useState(false);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState([]);
  const [updating, setUpdating] = useState(false);
  const fetchLessons = async () => {
    try {
      const res = await axios.get(`${proxy}/lessons/get-all/${chapter._id}`);
      setLessons(res.data);
      setFormData(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    chapter._id && fetchLessons();
  }, [chapter]);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const handleAddLesson = () => {
    const newLesson = {
      _id: "Form" + chapter._id + (formData.length + 1),
      title: "Lesson " + (formData.length + 1),
      order: formData.length + 1,
      chapterId: chapter._id,
    };
    setFormData([...formData, newLesson]);
  };
  const handleSelectLesson = (id) => {
    if (!lessonId.includes(id)) {
      setLessonId([...lessonId, id]);
    } else {
      const newLessonIds = lessonId.filter((item) => item !== id);
      setLessonId(newLessonIds);
    }
  };
  const handleDeleteLesson = async () => {
    const confirmDelete = confirm(
      `Bạn có chắc muốn xóa ${lessonId.length} bài học?`
    );
    if (!confirmDelete) return;
    setUpdating(true);

    try {
      const isServerId = (id) => !id.startsWith("Form");
      const realIds = lessonId.filter(isServerId);
      await Promise.all(
        realIds.map((id) => axios.delete(`${proxy}/lessons/${id}`))
      );

      const updatedLessons = formData
        .filter((lesson) => {
          const isToDelete = lessonId.includes(lesson._id);
          return !isToDelete;
        })
        .map((lesson, i) => ({ ...lesson, order: i + 1 }));

      setFormData(updatedLessons);
      setLessonId([]);
    } catch (error) {
      console.error("Lỗi khi xóa bài học:", error);
    } finally {
      setUpdating(false);
    }
  };

  const handleSave = async () => {
    setUpdating(true);

    try {
      const isNew = (lesson) => !lessons.some((old) => old._id === lesson._id);
      const newLessons = formData.filter(isNew);

      const isDeleted = (lesson) => !formData.some((f) => f._id === lesson._id);
      const deletedLessons = lessons.filter(isDeleted);

      for (const lesson of newLessons) {
        await axios.post(`${proxy}/lessons/create`, {
          title: lesson.title,
          order: lesson.order,
          chapterId: lesson.chapterId,
        });
      }

      for (const lesson of deletedLessons) {
        await axios.delete(`${proxy}/lessons/${lesson._id}`);
      }

      fetchLessons();
      setEditChapter(false);
      setLessonId([]);
    } catch (err) {
      console.error("Lưu bài học thất bại:", err);
    } finally {
      setUpdating(false);
    }
  };

  return (
    <li className="chapter">
      <div className="chapter-header">
        <span>{chapter.title}</span>
        <div className="tool">
          {!editChapter ? (
            <img
              src="/icons/edit.svg"
              onClick={() => {
                setEditChapter(!editChapter);
                setOpen(true);
              }}
              alt="Edit"
            />
          ) : (
            <img
              src="/icons/close.svg"
              onClick={() => {
                setEditChapter(!editChapter);
              }}
              alt="Close"
            />
          )}
          <img src="/icons/delete.svg" alt="Delete" />
          <img
            src="/icons/arrow_drop.svg"
            className={`icon ${open ? "rotate" : ""}`}
            alt="expand"
            onClick={toggleOpen}
          />
        </div>
      </div>

      {editChapter && (
        <div className="options">
          <button className="option" onClick={handleAddLesson}>
            Add lesson
            <img src="/icons/add.svg" alt="Add" />
          </button>
          <button className="option" onClick={handleDeleteLesson}>
            Delete Lesson <img src="/icons/delete.svg" alt="Delete" />
          </button>
          <button className="option">
            Change lesson order
            <img src="/icons/drag.svg" alt="Drag" />
          </button>
          <button className="option" onClick={handleSave}>
            Save
            <img src="/icons/save.svg" alt="Save" />
          </button>
        </div>
      )}

      {open && (
        <div>
          <ul className="lessons">
            {formData
              ?.sort((a, b) => a.order - b.order)
              .map((lesson) => (
                <li className="lesson" key={lesson._id}>
                  <div className="lessonItem">
                    {editChapter && (
                      <input
                        type="checkbox"
                        checked={lessonId.includes(lesson._id)}
                        onChange={() => handleSelectLesson(lesson._id)}
                      />
                    )}
                    {lesson.title}
                  </div>
                  {!lesson._id.startsWith("Form") && (
                    <div>
                      <Link to={`lessons/${lesson._id}`}>
                        <img src="/icons/info.svg" alt="Info" />
                      </Link>
                    </div>
                  )}
                </li>
              ))}
          </ul>
        </div>
      )}
      <div style={{ position: "relative", marginRight: "40px" }}>
        {updating && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              zIndex: 9999,
              cursor: "not-allowed",
            }}
          >
            <div>
              <div
                className="spinner"
                style={{
                  width: "50px",
                  height: "50px",
                  border: "6px solid #fff",
                  borderTop: "6px solid transparent",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export default Chapter;
