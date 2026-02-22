import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle =
    "block py-2 px-3 rounded-md transition duration-200 hover:bg-white/10";

  const activeStyle = "text-yellow-300 font-semibold";

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="EnglishMaster Logo"
              className="w-9 h-9 object-contain"
            />
            {/* Hide text on very small screens */}
            <h1 className="text-lg sm:text-xl font-bold tracking-wide ">
              EnglishMaster
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 lg:space-x-6 text-sm lg:text-base">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/vocabulary"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }
            >
              Vocabulary
            </NavLink>

             <NavLink
              to="/grammar"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }
            >
              Grammar
            </NavLink>

            <NavLink
              to="/tenses"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }
            >
              Tenses
            </NavLink>

            <NavLink
              to="/quiz"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }
            >
              Quiz
            </NavLink>

            <NavLink
              to="/daily-practice"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }
            >
              Practice
            </NavLink>

            <NavLink
              to="/translator"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }
            >
              Translator
            </NavLink>
 
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ${
                isOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`block absolute h-0.5 w-6 bg-white transition duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ${
                isOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Spacer to prevent content hiding behind fixed navbar */}
      <div className="h-20"></div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-indigo-700 to-blue-800 text-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-8 space-y-6 mt-16 text-lg">
          
          <NavLink to="/" onClick={() => setIsOpen(false)} className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/vocabulary" onClick={() => setIsOpen(false)} className={linkStyle}>
            Vocabulary
          </NavLink>

          <NavLink to="/grammar" onClick={() => setIsOpen(false)} className={linkStyle}>
            Grammar
          </NavLink>

          <NavLink to="/tenses" onClick={() => setIsOpen(false)} className={linkStyle}>
            Tenses
          </NavLink>

          <NavLink to="/quiz" onClick={() => setIsOpen(false)} className={linkStyle}>
            Quiz
          </NavLink>

          <NavLink to="/daily-practice" onClick={() => setIsOpen(false)} className={linkStyle}>
            Practice
          </NavLink>

          <NavLink to="/translator" onClick={() => setIsOpen(false)} className={linkStyle}>
            Translator
          </NavLink>

        </div>
      </div>
    </>
  );
};

export default Navbar;