"use client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MoodDark, MoodLight } from "../Components/ui/Mood";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    document.documentElement.classList.toggle("dark", savedMode);

    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const syncTheme = (event: StorageEvent) => {
      if (event.key === "darkMode") {
        const savedMode = event.newValue === "true";
        setDarkMode(savedMode);
        document.documentElement.classList.toggle("dark", savedMode);
      }
    };

    window.addEventListener("storage", syncTheme);
    return () => window.removeEventListener("storage", syncTheme);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    document.documentElement.classList.toggle("dark", newMode);
  };

  const toggleNavbar = () => setIsOpen(!isOpen);

  const closeNavbar = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-300 dark:bg-gray-800 text-white p-4 shadow-md z-50 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Abdelrahman Yasser</h1>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full dark:bg-gray-800 text-center py-4 rounded-md md:static md:flex md:items-center md:w-auto md:space-x-4 md:py-0`}
        >


          <Link
            onClick={closeNavbar}
            className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors py-1"
            to="/Home"
          >
            Home
          </Link>

          <Link
            onClick={closeNavbar}
            className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors py-1"
            to="/Product"
          >
            Product
          </Link>

       
        </div>
          <div className="flex">
          <Link
            className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors py-1 mr-4"
            to="/SignIn"
          >
            SignIn
          </Link>

          <Link
            className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors py-1"
            to="/SignUp"
          >
            SignUp
          </Link>
          <button
          onClick={toggleDarkMode}
          className="ml-4 bg-cyan-400 py-1 px-4 rounded dark:hover:bg-cyan-400 flex items-center"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <MoodDark /> : <MoodLight />}
        </button>

        <button
          onClick={toggleNavbar}
          className="text-white md:hidden ml-4"
          aria-label="Toggle Navigation"
          title="Dark"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
          </div>

      </div>
    </nav>
  );
};
