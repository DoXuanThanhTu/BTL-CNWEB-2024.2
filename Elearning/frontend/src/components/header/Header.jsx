import React, { useState } from 'react';
import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserData } from '../../context/UserContext';
import defaultAvatar from '../../assets/default-ava.png';

const Header = ({ isAuth }) => {
  const { logoutUser } = UserData();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  // Hàm đăng xuất
  const logoutHandler = () => {
    logoutUser(navigate);
    setShowDropdown(false);
  };

  // Hàm để mở/đóng dropdown khi click vào avatar
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  // Hàm đóng dropdown khi chọn item trong menu
  const closeDropdown = () => {
    setShowDropdown(false);
  };

  // Hàm đăng nhập và chuyển hướng đến MyCourse
  const loginHandler = () => {
    // Giả sử đăng nhập thành công
    navigate('/course');  // Chuyển hướng đến trang "Khóa học của tôi"
  };

  return (
    <header>
      <div className="logo">E-learning</div>

      <div className="nav-right">
        {/* Link to Home page */}
        <div className="link">
          <Link to="/">Trang chủ</Link>
        </div>

        {/* Link to All Courses */}
        {isAuth && (
          <div className="link">
            <Link to="/all-courses">Tất cả khóa học</Link>
          </div>
        )}

        {isAuth ? (
          <div className="dropdown">
            <img
              src={defaultAvatar}
              alt="avatar"
              className="avatar"
              onClick={toggleDropdown}
            />
            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/account" onClick={closeDropdown}>Hồ sơ của tôi</Link>
                {/* Chuyển hướng đến My Course */}
                <Link to="/course" onClick={closeDropdown}>Khóa học của tôi</Link>
                <button onClick={logoutHandler}>Đăng xuất</button>
              </div>
            )}
          </div>
        ) : (
          <div className="auth-buttons">
            <Link to="/login" className="btn" onClick={loginHandler}>Đăng nhập</Link>
            <Link to="/register" className="btn">Đăng ký</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
