import React from "react";
import style from "./../styles/about.module.css";
import bg1 from "./../assets/orangebg.jpg";
import bg2 from "./../assets/tealbg.jpg";
import bg3 from "./../assets/purplebg.jpg";
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
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const navigate = useNavigate();
  return (
    <div className={style.all}>
      <Header />
      <main className={style.main}>
        <div className={style.intro}>
          <h6>
            <b>____</b>ABOUT US
          </h6>
          <h1>
            Built for Saas <br /> and E-commerce
          </h1>
          <p>
            Our tools are easy to set up and use with a user friendly dashboard
            that enables you to setup, launch, automate and manage
            multi-affiliate campaigns in 5 minutes.
          </p>
          <img src={bg3} alt="" />
        </div>
        <div className={style.purpose}>
          <p>
            Metricks was developed because just like <br /> you, we needed a
            product that could give <br /> us <b>good value </b>.
          </p>
        </div>
        <div className={style.pitch}>
          <div className={style.why}>
            <h6>
              <span>01</span>
              WHY US?
            </h6>
            <p>
              We pride ourselves in our ability to innovate and create
              world-class tool that provide reliable and efficient touchpoints
              between advertisers and affiliates.
            </p>
          </div>
          <div className={style.grow}>
            <h6>
              <span>02</span>
              GROWING WITH YOU
            </h6>
            <p>
              Leveraging the best technology, we have developed an all-in-one
              affiliate marketing software, a genius tool to help you track,
              automate and optimize your influencer campaigns, all from one
              dashboard.
            </p>
            <p>
              Our team of experts are constantly brainstorming, testing and
              developing new solutions with one thing in mind - your business
              growth. Your success is our success and by giving you the tools
              you need to scale, we grow as well.
            </p>
            <img src={bg2} alt="" />
          </div>
        </div>
        <div className={style.question}>
          <h3>Got a Question?</h3>
          <p>
            See how metricks can help your business grow with best affiliate
            marketing tracking <br /> software.
          </p>
          <button>
            Contact Us{" "}
            <FontAwesomeIcon icon={faArrowRight} className={style.arrow} />
          </button>
          <img src={bg1} alt="" />
        </div>
      </main>
      <footer className={style.footer}>
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
          <p onClick={() => navigate("/github")}> Github Route </p>
        <p>Copyright 2022 @ Peddle Technologies. All Rights Reserved</p>
      </footer>
    </div>
  );
}
