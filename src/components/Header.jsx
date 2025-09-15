import React from "react";
import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <ul className="flex w-full justify-around ">
        <li>
          <NavLink to="/">
            <h2>Home</h2>
          </NavLink>
        </li>
        <li>
          <NavLink to="/table">
            <h2>Table</h2>
          </NavLink>
        </li>
        <li>
          <NavLink to="/form">
            <h2>Form</h2>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            <h2>About</h2>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Help">
            <h2>Help</h2>
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Header;
