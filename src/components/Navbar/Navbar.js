import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [clicked, clicker] = useState(false);

  function handleClick(prevClicked) {
    clicker((prevClicked) => {
      return !prevClicked;
    });
  }

  return (
    <div className="header" id="header">
      <a href="/">
        <img
          src={process.env.PUBLIC_URL + "/images/logo_gold.svg"}
          alt="Wibson"
          className="logo-word"
        ></img>
      </a>
      <div className={clicked ? "navbar drop" : "navbar colapse"}>
        <Link className="global-link" to="/about-us">
          <a className="nav-element" href="#header">
            About Us
          </a>
        </Link>
        <Link className="global-link" to="/about-us">
          <a className="nav-element" href="#footer">
            Enterprises
          </a>
        </Link>
        <Link className="global-link" to="/about-us">
          <a className="nav-element" href="#footer">
            Research
          </a>
        </Link>
      </div>
      <i onClick={handleClick} className="fas fa-bars"></i>
    </div>
  );
}
