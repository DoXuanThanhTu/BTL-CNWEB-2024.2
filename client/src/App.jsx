import React from "react";
import { Route, Routes, useLocation, useMatch } from "react-router-dom";
import Home from "./pages/students/Home";
import CourseList from "./pages/students/CourseList";
import CourseDetail from "./pages/students/CourseDetail";
import MyEnrollments from "./pages/students/MyEnrollments";
import Player from "./pages/students/Player";
import Loading from "./components/students/Loading";
import Educator from "./pages/educator/Educator";
// import Dashboard from "./pages/educator/dashboard/Dashboard";
import AddCourse from "./pages/educator/AddCourse";
import MyCourse from "./pages/educator/myCourse/MyCourse";
// import StudentEnrolled from "./pages/educator/StudentEnrolled";
import Navbar from "./components/students/Navbar";
import styled from "styled-components";
import Login from "./pages/students/Login";
import EducatorMainLayout from "./pages/educator/EducatorMainLayout";
import Course from "./components/educator/course/Course";
const Container = styled.div`
  width: 100%;
  background-color: white;
`;

const App = () => {
  const isEducatorRoute = useMatch("/educator/*");
  const path = useLocation().pathname;
  const fetchCourse = path.split("/")[4];
  return (
    <Container>
      {!isEducatorRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/course-list/:input" element={<CourseList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/my-enrollment" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        <Route element={<EducatorMainLayout />}>
          <Route path="/educator" element={<Educator />}>
            {/* <Route path="dashboard" element={<Dashboard />} /> */}
            <Route path="add-course" element={<AddCourse />} />
            <Route path="my-course" element={<MyCourse />} />
            {/* <Route path="student-enrolled" element={<StudentEnrolled />} /> */}
            <Route
              path="course/get-one/:courseId"
              element={<Course fetch={fetchCourse} />}
            />
          </Route>
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
