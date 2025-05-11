import React from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Header from './components/header/header';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Verify from './pages/auth/Verify';
import Footer from './components/footer/Footer';
import Account from './pages/account/Account';
import { UserData } from './context/UserContext';
import MyCourse from './pages/course/MyCourse';



const App = () => {
  const{isAuth, user} = UserData()
  
  return (
  <>
  <BrowserRouter>
  <Header isAuth={isAuth}/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/account" element={isAuth?<Account user={user}/>:<Login/>} />
    <Route path="/login" element={isAuth?<Account/>:<Login/>} />
    <Route path="/register" element={isAuth?<Home />:<Register/>} />
    <Route path="/verify" element={isAuth?<Home />:<Verify/>} />

    <Route path="/course" element={<MyCourse />} />
    
  </Routes>
  
  <Footer />
  </BrowserRouter>
  </>
  );
  
};

export default App