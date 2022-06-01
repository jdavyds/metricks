import React from "react";
import style from "./../styles/contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
export default function Contact() {
  return (
    <div className={style.contact}>
      <div className={style.dummy}>
        <h3>THIS IS A DUMMY TEXT</h3>
        <h4>ANOTHER DUMMY</h4>
        <p>
          The very last dummy text <br /> here
        </p>
        <nav>
          <button></button>
          <button></button>
        </nav>
        <input type="text" disabled />
        <nav className={style.dumfoot}>
          <FontAwesomeIcon className={style.icons} icon={faYoutube} />
          <FontAwesomeIcon className={style.icons} icon={faYoutube} />
        </nav>
        <span>Rights Reserved</span>
      </div>
      <div className={style.main}>
        <p>
          Hey, we are still in works, <br /> but you can send us a message!
        </p>
        <form>
          <label>
            <span>First name</span>
            <input type="text" placeholder="Enter your first name" />
          </label>
          <label>
            <span>Last name</span>
            <input type="text" placeholder="Enter your last name" />
          </label>
          <label>
            <span>Email address</span>
            <input type="email" placeholder="Enter email address" />
          </label>
          <label>
            <span>Tell us what you need help with:</span>
            <textarea placeholder='Enter a topic like "Channel Problem..."' />
          </label>
          <button>SEND NOW</button>
        </form>
      </div>
      <Box className={style.nav}>
        <Fab color="white">
          <FontAwesomeIcon className={style.icons} icon={faArrowRight} />
        </Fab>
      </Box>
    </div>
  );
}
