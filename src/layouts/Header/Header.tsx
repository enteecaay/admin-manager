import { User } from "lucide-react";
import React from "react";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="navbar-right">
        <span className="text">Admin User</span>
        <div className="icon">
          <User size={18} />
        </div>
      </div>
    </div>
  );
};

export default Header;
