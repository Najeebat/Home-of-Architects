import { NavLink, Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import  Logo_bg from "../images/Logo.png";
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to={"/"} className="title">
        <img src={Logo_bg} alt="Logo" />
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to={"/"}> MAIN</NavLink>
        </li>
        <li>
          <NavLink to={"/gallery"}> GALLERY</NavLink>
        </li>
        <li>
          <NavLink to={"/projects"}> PROJECTS</NavLink>
        </li>
        <li>
          <NavLink to={"/certification"}> CERTIFICATIONS</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}> CONTACT</NavLink>
        </li>
      </ul>
    </nav>
  );
};
