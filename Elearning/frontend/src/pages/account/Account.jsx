import React from 'react';
import "./account.css";
import { UserData } from '../../context/UserContext';
import toast from 'react-hot-toast';

const Account = () => {
  const { user, setIsAuth, setUser } = UserData();

  const logoutHandler = () => {
    localStorage.clear();
    setUser([]);
    setIsAuth(false);
    toast.success("Đăng xuất");
  };

  return (
    <div>
      {user?.name && (
        <div className="profile">
          <h2>Hồ sơ của tôi</h2>
          <div className="profile-info">
          
            <p><strong>Name - {user.name}</strong></p>
            <p><strong>Email - {user.email}</strong></p>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
