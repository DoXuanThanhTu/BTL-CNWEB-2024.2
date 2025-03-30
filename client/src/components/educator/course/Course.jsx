import React, { useEffect, useState } from "react";
import "./Course.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Course = ({ course, fetch }) => {
  const [courseFetch, setCourseFetch] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [update, setUpdate] = useState([]);
  const [isEditing, setIsEditing] = useState({
    title: false,
    description: false,
  });

  const handleEdit = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: true }));
  };

  const handleDone = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: false }));
  };
  const getCourse = async () => {
    const res = await axios.get(
      `http://localhost:8000/courses/get-one/${fetch}`
    );
    setCourseFetch(res.data);
    setUpdate(res.data);
    const fetchChapters = await axios.get(
      `http://localhost:8000/chapters/${res.data._id}`
    );
    setChapters(fetchChapters.data);
  };
  useEffect(() => {
    if (fetch) getCourse();
  }, [fetch]);
  const handleUpdate = () => {};
  return (
    <>
      {fetch ? (
        <div className="fetch-course-container">
          <div className="fetch-course-image">
            <img
              className="fetch-course-image"
              src={courseFetch.thumbnail}
              alt={courseFetch.title}
            />
          </div>
          <form>
            <div className="item">
              <label>Title</label>
              {isEditing.title ? (
                <>
                  <input
                    type="text"
                    value={update.title || ""}
                    onChange={(e) =>
                      setUpdate((prev) => ({ ...prev, title: e.target.value }))
                    }
                  />
                  <button type="button" onClick={() => handleDone("title")}>
                    Done
                  </button>
                </>
              ) : (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span>{update.title}</span>
                  <svg
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#1f1f1f"
                    style={{ cursor: "pointer", marginLeft: "8px" }}
                    onClick={() => handleEdit("title")}
                  >
                    <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                  </svg>
                </div>
              )}
            </div>
            <div className="item">
              <label>Description</label>
              {isEditing.description ? (
                <>
                  <input
                    type="text"
                    value={update.description || ""}
                    onChange={(e) =>
                      setUpdate((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                  />
                  <button
                    type="button"
                    onClick={() => handleDone("description")}
                  >
                    Done
                  </button>
                </>
              ) : (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span>{update.description}</span>
                  <svg
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#1f1f1f"
                    style={{ cursor: "pointer", marginLeft: "8px" }}
                    onClick={() => handleEdit("description")}
                  >
                    <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                  </svg>
                </div>
              )}
            </div>
            <div className="item">
              <label>Chapters</label>
              {chapters.length > 0 ? (
                chapters.map((chapter) => {
                  return <>kk</>;
                })
              ) : (
                <span>No chapter</span>
              )}
            </div>
          </form>
        </div>
      ) : (
        <div className="course-container">
          <Link
            to={`/educator/course/get-one/${course._id}`}
            key={course._id}
            className="course-link"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div>
              <div className="img-container">
                <img
                  className="course-image"
                  src={course.thumbnail}
                  alt={course.title}
                />
              </div>
              <div className="course-info">
                <div className="course-title">{course.title}</div>
                {/* <div className="course-desc">{course.description}</div> */}
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default Course;
