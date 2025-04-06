import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Chapter.css";
import { Link } from "react-router-dom";

const proxy = import.meta.env.VITE_API_URL;

const Chapter = ({ chapter }) => {
  const [lessons, setLessons] = useState([]);
  const [editChapter, setEditChapter] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const res = await axios.get(`${proxy}/lessons/get-all/${chapter._id}`);
        setLessons(res.data);
      } catch (error) {}
    };
    fetchLessons();
  }, [chapter]);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <li className="chapter">
      <div className="chapter-header">
        <span>{chapter.title}</span>
        <div className="tool">
          {!editChapter ? (
            <img
              src="/icons/edit.svg"
              onClick={() => setEditChapter(!editChapter)}
              alt="Edit"
            />
          ) : (
            <img
              src="/icons/close.svg"
              onClick={() => setEditChapter(!editChapter)}
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
          <button className="option">
            Add lesson
            <img src="/icons/add.svg" alt="Add" />
          </button>
          <button className="option">
            Change lesson order
            <img src="/icons/drag.svg" alt="Drag" />
          </button>
        </div>
      )}

      {open && (
        <div>
          <ul className="lessons">
            {lessons.map((lesson) => (
              <li className="lesson" key={lesson._id}>
                <div
                  className="lessonItem"
                  onClick={() => handleSelectLesson(lesson._id)}
                >
                  {lesson.title}
                </div>
                <div>
                  <Link
                    to={{
                      pathname: `lessons/${lesson._id}`,
                    }}
                  >
                    <img src="/icons/info.svg" alt="Info" />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default Chapter;
