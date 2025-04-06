import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  min-width: 200px;
  height: 100vh;
  background-color: #2c3e50;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SidebarItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background-color: #34495e;
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <SidebarItem to="/educator/dashboard">📚 Dashboard</SidebarItem>
      <SidebarItem to="/educator/my-course">📚 My Courses</SidebarItem>
      <SidebarItem to="/educator/add-course">➕ Add New Course</SidebarItem>
    </Container>
  );
};

export default Sidebar;
