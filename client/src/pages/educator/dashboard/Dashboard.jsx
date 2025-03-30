// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Course from "../../../components/educator/Course";
// import Sidebar from "../../../components/educator/Sidebar";
// import "./Dashboard.css";
// const Dashboard = () => {
//   const [courses, setCourses] = useState([]);
//   const getAllCourse = async () => {
//     const res = await axios.get(`http://localhost:8000/courses/get-all`);
//     setCourses(res.data);
//   };
//   useEffect(() => {
//     getAllCourse();
//   }, []);
//   return (
//     <div className="dashboard">
//       {/* <div className="dashboardContainer">
//         {courses.map((course) => {
//           return <Course course={course} key={course._id} />;
//         })}
//       </div> */}
//     </div>
//   );
// };

// export default Dashboard;
