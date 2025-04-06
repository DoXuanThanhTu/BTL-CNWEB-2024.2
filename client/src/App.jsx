import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/students/Home";
import CourseList from "./pages/students/CourseList";
import CourseDetail from "./pages/students/CourseDetail";
import MyEnrollments from "./pages/students/MyEnrollments";
import Player from "./pages/students/Player";
import Loading from "./components/students/Loading";

// Educator
import CourseDetailEducator from "./pages/educator/courseDetail/CourseDetail";
import Dashboard from "./pages/educator/dashboard/Dashboard";
import AddCourse from "./pages/educator/AddCourse";
import MyCourse from "./pages/educator/myCourse/MyCourse";
import Lesson from "./components/educator/lesson/Lesson";
import EducatorMainLayout from "./pages/educator/EducatorMainLayout";
import Navbar from "./components/students/Navbar";
import Login from "./pages/students/Login";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: white;
`;

const App = () => {
  const path = useLocation().pathname;
  const isEducatorRoute = path.startsWith("/educator");

  return (
    <Container>
      {!isEducatorRoute && <Navbar />}
      <Routes>
        {/* Student Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/course-list/:input" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/my-enrollment" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />

        {/* Educator Routes */}
        <Route path="/educator" element={<EducatorMainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-course" element={<MyCourse />} />
          <Route path="courses/:courseId" element={<CourseDetailEducator />} />
          <Route
            path="courses/:courseId/lessons/:lessonId"
            element={<Lesson />}
          />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
