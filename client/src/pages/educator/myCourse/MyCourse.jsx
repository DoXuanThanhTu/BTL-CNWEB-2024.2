import React, { useEffect, useState } from "react";
import axios from "axios";
import Course from "../../../components/educator/course/Course";
import "./MyCourse.css";
import { Link } from "react-router";
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
          <Course course={course} />
        ))}
      </div>
    </div>
  );
};

export default MyCourse;
