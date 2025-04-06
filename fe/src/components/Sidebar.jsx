// components/Sidebar.jsx
import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="tool">
        <strong>Công cụ khóa học</strong>
        <p>📌 Các bài học đã lưu</p>
      </div>
      <div className="time">
        <strong>Lưu ý các mốc thời gian</strong>
        <p>📅 22/06/2028</p>
        <p className="note">Kết thúc khóa học</p>
        <small>Sau thời gian này, khóa học sẽ chuyển sang trạng thái lưu trữ.</small>
      </div>
      <div className="documents">
        <strong>Tài liệu khoá học</strong>
        <p>(Phần này có thể bổ sung sau)</p>
      </div>
    </aside>
  );
}