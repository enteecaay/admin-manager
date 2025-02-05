import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

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
        <NavLink to="/posts">
          <FontAwesomeIcon icon={faNewspaper} />
          <span>Post</span>
        </NavLink>
        <NavLink to="/users">
          <span>User</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
