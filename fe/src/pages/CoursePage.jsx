// pages/CoursePage.jsx
import React from 'react';
import Header from '../components/Header';
import CourseCard from '../components/CourseCard';
import Sidebar from '../components/Sidebar';
import './CoursePage.css';

const courseSections = [
  "A. Mục đích môn học",
  "Chương Mở đầu (CMĐ)",
  "Chương 1: Giới thiệu về Lý thuyết Mật mã",
  "Chương 1: Mật mã cổ điển và các nguyên lý cơ sở của mật mã",
  "Chương 2: Mật mã khối và chế độ sử dụng",
];

export default function CoursePage() {
  return (
    <div className="container">
      <Header />

      <div className="main">
        <div className="course">
          <h2>Nhập môn an toàn thông tin</h2>
          <button className="btn">Tiếp tục học</button>
          <div className="course-list">
            {courseSections.map((title, i) => (
              <CourseCard key={i} title={title} />
            ))}
          </div>
        </div>

        <Sidebar />
      </div>
    </div>
  );
}