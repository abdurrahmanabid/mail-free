import { Moon, Sun } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Adjust if your state structure is different.
  const theme = localStorage.getItem("theme");
  if (!theme) {
    localStorage.setItem("theme", "dark");
  }
  const toggleDarkMode = () => {
    if (theme === "dark") {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
      return;
    }
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark");
    setIsDarkMode(true);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="relative z-50 bg-blue-600 text-white shadow-md dark:bg-gray-800 dark:text-gray-200">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            Mail
            <span className="text-yellow-300 dark:text-yellow-500">Free</span>
          </div>

          {/* Dark Mode Toggle */}
          <button
            className="ml-4 p-2 rounded-full bg-yellow-300 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:focus:ring-gray-500"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <Sun className="text-gray-800 dark:text-yellow-300 h-6 w-6" />
            ) : (
              <Moon className="text-gray-800 dark:text-yellow-300 h-6 w-6" />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
