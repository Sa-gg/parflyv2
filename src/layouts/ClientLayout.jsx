import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import Navbar from "../client/components/Navbar";

const ClientLayout = () => {
  const { darkMode, toggleDarkMode } = useOutletContext();

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Outlet />
    </div>
  );
};

export default ClientLayout;
