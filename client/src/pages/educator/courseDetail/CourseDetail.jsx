import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Chapter from "../../../components/educator/chapter/Chapter";
import "./CourseDetail.css";
import { useAppContext } from "../../../context/AppContext";
const proxy = import.meta.env.VITE_API_URL;

const CourseDetail = () => {
  const courseId = useParams();
  const path = useLocation().pathname.split("/")[3];
  const [course, setCourse] = useState(null);
  const [chapters, setChapters] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [courseRes, chaptersRes, lessonsRes] = await Promise.all([
          axios.get(`${proxy}/courses/get-one/${path}`),
          axios.get(`${proxy}/chapters/get-all/${path}`),
        ]);
        setCourse(courseRes.data);

        setChapters(chaptersRes.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [courseId]);

  if (!course) return <div>Đang tải khóa học...</div>;
  return (
    <div>
      <div className="container">
        <div className="left-container">
          <img src={course.thumbnail} alt={course.title} />
          <div className="item">
            <label htmlFor="">Title</label>
            <p>{course.title}</p>
          </div>
          <div className="item">
            <label htmlFor="">Description</label>
            <p>{course.description}</p>
          </div>
          <div className="status">
            <label htmlFor="">Status</label>
            {course.isPublished ? (
              <p style={{ color: "green" }}>Publishing</p>
            ) : (
              <p style={{ color: "gray" }}>No Publish</p>
            )}
          </div>
        </div>
        <div className="right-container">
          <h2>Chapter</h2>
          {chapters != null ? (
            <ul className="chapters">
              {chapters.map((chapter, index) => {
                return <Chapter key={index} chapter={chapter} />;
              })}
            </ul>
          ) : (
            <>No Chapter</>
          )}
          <button>Add new</button>
        </div>
      </div>
      <div className="publish">
        {course.isPublished ? (
          <button className="no-published">Stop publishing</button>
        ) : (
          <button className="published">Publish</button>
        )}
        <button className="remove">Remove</button>
      </div>
    </div>
  );
};

export default CourseDetail;
