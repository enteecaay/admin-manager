import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
import { Users, FileText } from "lucide-react";
const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <div className="menu">
        <span
          style={{
            fontSize: "1rem",
            fontWeight: "semibold",
            color: "grey",
          }}
        >
          MAIN
        </span>
        <NavLink
          to="/posts"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          <div className="nav-item">
            <FileText size={20} className="icon" />
            <span>Post</span>
          </div>
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          <div className="nav-item">
            <Users size={20} className="icon" />
            <span>User</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
