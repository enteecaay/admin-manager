import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./MainLayout.scss";

const MainLayout: React.FC = () => {
  return (
    <>
      <header>
        <Header />
        <aside>
          <Sidebar />
          <main>
            <Outlet />
          </main>
        </aside>
      </header>
    </>
  );
};

export default MainLayout;
