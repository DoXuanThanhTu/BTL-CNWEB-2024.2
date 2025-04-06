import React, { useEffect, useState } from "react";
import axios from "axios";
import Course from "../../../components/educator/course/Course";
import "./MyCourse.css";
const MyCourse = () => {
  const [courses, setCourses] = useState([]);
  const getAllCourse = async () => {
    const res = await axios.get(`http://localhost:8000/courses/get-all`);
    setCourses(res.data);
  };
  useEffect(() => {
    getAllCourse();
  }, []);
  return (
    <div className="myCourse">
      <div className="myCourseContainer">
        {courses.map((course) => (
          <Course key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default MyCourse;
