import React, { useState } from 'react';
import './auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserData } from '../../context/UserContext';

const Login = () => {
  const navigate = useNavigate();
  const { btnLoading, loginUser } = UserData();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const success = await loginUser(email, password); 
  
      if (success) {
        navigate('/course'); 
      } else {
        alert('Email hoặc mật khẩu không đúng!');
      }
    } catch (error) {
      console.error(error);
      alert('Đã xảy ra lỗi khi đăng nhập');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Đăng nhập</h2>
        <form onSubmit={submitHandler}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Mật khẩu</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button disabled={btnLoading} type="submit" className="common-btn">
            {btnLoading ? 'Vui lòng chờ...' : 'Đăng nhập'}
          </button>
        </form>
        <p>
          Bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
