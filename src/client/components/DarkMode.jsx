import React from 'react'
import { useState, useEffect } from "react";

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
      );
    
      useEffect(() => {
        if (darkMode) {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }, [darkMode]);
    
      return (
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-800 rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      );
    };
    
export default DarkMode