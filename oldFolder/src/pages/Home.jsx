import React from "react";
import Navbar from "../components/Navbar";
import Image from "../components/Image";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Courses from "../components/Courses";
import CourseDetail from "./CourseDetail";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Courses />
    </div>
  );
};
