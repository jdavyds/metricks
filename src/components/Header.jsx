import React from "react";
import style from "./../styles/header.module.css";
import logo from "../assets/logo1.png";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className={style.header}>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <nav>
        <Link to="/about">ABOUT US</Link>
        <Link to="/blog">BLOG</Link>
        <button onClick={() => navigate("/contact")}>CONTACT US</button>
      </nav>
      <Outlet />
    </header>
  );
}
