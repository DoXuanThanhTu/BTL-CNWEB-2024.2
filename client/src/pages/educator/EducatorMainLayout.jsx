import React from "react";
import Sidebar from "../../components/educator/Sidebar";
import { Outlet } from "react-router-dom";

const EducatorMainLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default EducatorMainLayout;
