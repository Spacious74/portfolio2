import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="navbar-logo">VAIBHAV</div>
        <div className="navbar-links">
          <ul className="flex">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
