import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="main">
      NavBar
      <ul className="opt">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "ActiveClass" : "")}
            id="Naav"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li><NavLink to='/uss'>Support us</NavLink></li>
        <li>
          <NavLink
            id="Naav"
            className={({ isActive }) => (isActive ? "ActiveClass" : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            id="Naav"
            className={({ isActive }) => (isActive ? "ActiveClass" : "")}
            to="/help"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
