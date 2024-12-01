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
          } absolute top-16 left-0 w-full  dark:bg-gray-800 text-center py-4 rounded-md md:static md:flex md:items-center md:w-auto md:space-x-4 md:py-0`}
        >
          <img className="absolute top-1 right-3 rounded-full  border-solid border-2 border-cyan-400  w-9" src="data:image/jpeg;base64,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" alt="img" />
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

          <Link className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors py-1"to="/Login">login</Link>
          <Link className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors py-1"to="/Register">Register</Link>
    
        </div>
        <button
          onClick={toggleDarkMode}
          className="ml-4 bg-cyan-400  py-1 px-4 rounded dark: dark:hover:bg-cyan-400 flex items-center"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <MoodDark /> : <MoodLight />}
        </button>
        <button
          onClick={toggleNavbar}
          className="text-white md:hidden ml-4"
          aria-label="Toggle Navigation"
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
    </nav>
  );
};
