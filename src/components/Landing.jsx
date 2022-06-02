import React from "react";
import Countdown from "react-countdown";
import style from "./../styles/landing.module.css";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faLinkedin,
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className={style.all}>
      <Header />
      <main className={style.main}>
        <h1>
          SOMETHING AWESOME IS <br /> COMING SOON
        </h1>
        <p>
          Your all-in-one affiliate marketing tracking software{" "}
          <strong>track</strong>, <strong>automate</strong> and <br />{" "}
          <strong>optimize</strong> your campains
        </p>
        <Countdown date={Date.now() + 864000000} renderer={renderer} />
        <div className={style.name}>
          <input type="text" placeholder="First Name.." />
          <input type="text" placeholder="Last Name." />
        </div>
        <div className={style.waitlist}>
          <input type="email" placeholder="Enter your email address..." />
          <button>JOIN OUR WAITING LIST</button>
        </div>
        <div className={style.footer}>
          <nav>
            <FontAwesomeIcon className={style.icons} icon={faYoutube} />
            <FontAwesomeIcon className={style.icons} icon={faFacebookSquare} />
            <FontAwesomeIcon className={style.icons} icon={faLinkedin} />
            <FontAwesomeIcon className={style.icons} icon={faInstagramSquare} />
            <FontAwesomeIcon className={style.icons} icon={faTwitterSquare} />
          </nav>
          <nav>
            <Link to="/"> Terms of Service </Link>
            <Link to="/"> Privacy Policy </Link>
          </nav>
          <p onClick={() => navigate("/github")} style={{ zIndex: 2222 }}>
            Github Route
          </p>
          <p>Copyright 2022 @ Peddle Technologies. All Rights Reserved</p>
        </div>
      </main>
    </div>
  );
}

const Completionist = () => <span>Welcome to METRICKS!</span>;
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className={style.count}>
        <span>
          {" "}
          <strong>{days}</strong> Days
        </span>{" "}
        :
        <span>
          {" "}
          <strong>{hours}</strong> Hours
        </span>{" "}
        :
        <span>
          <strong>{minutes}</strong> Minutes
        </span>{" "}
        :
        <span>
          <strong>{seconds}</strong> Seconds
        </span>
      </div>
    );
  }
};
