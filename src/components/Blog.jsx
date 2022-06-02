import React, { useState } from 'react'
import style from "./../styles/blog.module.css";
import logo from "../assets/logo.png";
import post from "../assets/blog.png";
import bg1 from "./../assets/orangebg.jpg";
import bg3 from "./../assets/purplebg.jpg";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faArrowRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faLinkedin,
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
export default function Blog() {
  const navigate = useNavigate();
  const [res, setRes] = useState(false);
  return (
    <div>
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
      <main>
        <div className={style.intro}>
          <h6>
            <b>____</b>BLOG
          </h6>
          <h1>Articles and News</h1>
          <img src={bg3} alt="" />
        </div>
        <div className={style.main}>
          <div className={style.latest}>
            <h1>Latest From The Blog</h1>
            <nav>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                ipsum itaque quisquam omnis, quod laborum quidem, officia
                fugiat, eos blanditiis tempora iste ab nesciunt. Hic alias
                tempora sit sapiente nulla.
              </p>
              <label>
                <input type="text" placeholder="Search here" />
                <FontAwesomeIcon
                  className={style.icons}
                  icon={faMagnifyingGlass}
                />
              </label>
            </nav>
          </div>
          <div className={style.posts}>
            <nav className={style.post}>
              <img src={post} alt="" />
              <small>SEPTEMBER 6, 2021 FEATURED ARTICLE AFFILIATE</small>
              <strong>
                12 Popup Use Cases <br /> To Increase Conversions
              </strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, quam sed hic fuga deserunt voluptatum culpa nulla
                voluptatibus. Consequatur, nisi.
              </p>
              <button>
                <span></span>
                READ MORE
              </button>
            </nav>
            <nav className={style.post}>
              <img src={post} alt="" />
              <small>SEPTEMBER 6, 2021 FEATURED ARTICLE AFFILIATE</small>
              <strong>
                12 Popup Use Cases <br /> To Increase Conversions
              </strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, quam sed hic fuga deserunt voluptatum culpa nulla
                voluptatibus. Consequatur, nisi.
              </p>
              <button>
                <span></span>
                READ MORE
              </button>
            </nav>
            <nav className={style.post}>
              <img src={post} alt="" />
              <small>SEPTEMBER 6, 2021 FEATURED ARTICLE AFFILIATE</small>
              <strong>
                12 Popup Use Cases <br /> To Increase Conversions
              </strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, quam sed hic fuga deserunt voluptatum culpa nulla
                voluptatibus. Consequatur, nisi.
              </p>
              <button>
                <span></span>
                READ MORE
              </button>
            </nav>
            <nav className={style.post}>
              <img src={post} alt="" />
              <small>SEPTEMBER 6, 2021 FEATURED ARTICLE AFFILIATE</small>
              <strong>
                12 Popup Use Cases <br /> To Increase Conversions
              </strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, quam sed hic fuga deserunt voluptatum culpa nulla
                voluptatibus. Consequatur, nisi.
              </p>
              <button>
                <span></span>
                READ MORE
              </button>
            </nav>
            <nav className={style.post}>
              <img src={post} alt="" />
              <small>SEPTEMBER 6, 2021 FEATURED ARTICLE AFFILIATE</small>
              <strong>
                12 Popup Use Cases <br /> To Increase Conversions
              </strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, quam sed hic fuga deserunt voluptatum culpa nulla
                voluptatibus. Consequatur, nisi.
              </p>
              <button>
                <span></span>
                READ MORE
              </button>
            </nav>
            <nav className={style.post}>
              <img src={post} alt="" />
              <small>SEPTEMBER 6, 2021 FEATURED ARTICLE AFFILIATE</small>
              <strong>
                12 Popup Use Cases <br /> To Increase Conversions
              </strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, quam sed hic fuga deserunt voluptatum culpa nulla
                voluptatibus. Consequatur, nisi.
              </p>
              <button>
                <span></span>
                READ MORE
              </button>
            </nav>
          </div>
          <div className={style.recent}>
            <h1>Recent Articles</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ipsum itaque quisquam omnis, quod laborum quidem, officia fugiat.
            </p>
          </div>
          <div className={style.rposts}>
            <nav className={style.rpost}>
              <small>SEPTEMBER 6, 2021 FEATURED ARTICLE AFFILIATE</small>
              <strong>12 Popup Use Cases To Increase Conversions</strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, quam sed hic fuga deserunt voluptatum culpa nulla
                voluptatibus. Consequatur, nisi.
              </p>
              <button>
                <span></span>
                READ MORE
              </button>
            </nav>
            <nav className={style.rpost}>
              <small>SEPTEMBER 6, 2021 FEATURED ARTICLE AFFILIATE</small>
              <strong>12 Popup Use Cases To Increase Conversions</strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, quam sed hic fuga deserunt voluptatum culpa nulla
                voluptatibus. Consequatur, nisi.
              </p>
              <button>
                <span></span>
                READ MORE
              </button>
            </nav>
            <nav className={style.rpost}>
              <small>SEPTEMBER 6, 2021 FEATURED ARTICLE AFFILIATE</small>
              <strong>12 Popup Use Cases To Increase Conversions</strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, quam sed hic fuga deserunt voluptatum culpa nulla
                voluptatibus. Consequatur, nisi.
              </p>
              <button>
                <span></span>
                READ MORE
              </button>
            </nav>
          </div>
          <button className={style.load}>LOAD MORE</button>
        </div>
        <div className={style.question}>
          <h3>What To Know About Metricks?</h3>
          <p>Learn who we are and whatdrives us.</p>
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
          <Link to="/github"> Github Route </Link>
        </nav>
        <p>Copyright 2022 @ Peddle Technologies. All Rights Reserved</p>
      </footer>
    </div>
  );
}
