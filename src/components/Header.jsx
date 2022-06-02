import React, { useState } from "react";
import style from "./../styles/header.module.css";
import logo from "../assets/logo1.png";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  const navigate = useNavigate();
  const [res, setRes] = useState(false);
  return (
    <header className={style.header}>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <FontAwesomeIcon
        className={style.icons}
        icon={faBars}
        onClick={() => setRes(!res)}
      />
      <nav className={res ? style.show : ""}>
        <NavLink to="/about">ABOUT US</NavLink>
        <NavLink to="/blog">BLOG</NavLink>
        <button onClick={() => navigate("/contact")}>CONTACT US</button>
      </nav>
      <Outlet />
    </header>
  );
}
