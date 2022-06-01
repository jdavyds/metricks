import React from "react";
import style from "./../styles/header.module.css";
import logo from "../assets/logo1.png";
import { Link, Outlet } from "react-router-dom";
export default function Header() {
  return (
    <header className={style.header}>
      <Link to='/'>
        <img src={logo} alt="" />
      </Link>
      <nav>
        <Link to="/about">ABOUT US</Link>
        <Link to="/blog">BLOG</Link>
        <button>CONTACT US</button>
      </nav>
      <Outlet />
    </header>
  );
}
