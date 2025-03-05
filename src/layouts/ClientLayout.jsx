import React, { useEffect, } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import Navbar from "../client/components/Navbar";
import { initFlowbite } from "flowbite";

const ClientLayout = () => {
  const { darkMode, toggleDarkMode } = useOutletContext(); 

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Outlet context={{ darkMode, toggleDarkMode }} />
    </div>
  );
};

export default ClientLayout;
