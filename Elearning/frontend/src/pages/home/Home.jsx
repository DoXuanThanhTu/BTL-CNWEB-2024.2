import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import { FaCode, FaServer, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';
import homeImage from "../../assets/home.png"; 

const Home = () => {
  const navigate = useNavigate(); // hook để chuyển hướng

  const handleLoginRedirect = () => {
    navigate('/login'); // Chuyển hướng đến trang login
  };

  return (
    <section className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h1>Learn Programming & Design Online</h1>
          <p>Upgrade your skills in Web Development, UI/UX Design, and more — all at your own pace.</p>
          <button onClick={handleLoginRedirect}>Let's Start</button>
        </div>
        <div className="home-image">
          <img src={homeImage} alt="Online Learning" />
        </div>
      </div>

      <div className="course-categories">
        <h2>Course Categories</h2>
        <div className="category-list">
          <div className="category-card">
            <FaCode className="category-icon" />
            Frontend Development
          </div>
          <div className="category-card">
            <FaServer className="category-icon" />
            Backend Development
          </div>
          <div className="category-card">
            <FaPaintBrush className="category-icon" />
            UI/UX Design
          </div>
          <div className="category-card">
            <FaMobileAlt className="category-icon" />
            Mobile App
          </div>
        </div>
      </div>

      <div className="course-explorer">
        <h3>Course Explorer</h3>

      </div>
    </section>
  );
};

export default Home;
