import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <ul className="flex justify-center space-x-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md transition-colors ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/table"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md transition-colors ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
            >
              Table
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/form"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md transition-colors ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
            >
              Form
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md transition-colors ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/help"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md transition-colors ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
            >
              Help
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
