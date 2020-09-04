import React, { useState } from "react";
import "./Navbar.css";

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
        <a className="nav-element" href="#header">
          About Us{" "}
        </a>
        <a className="nav-element" href="#footer">
          Enterprises
        </a>
        <a className="nav-element" href="#footer">
          Research
        </a>
      </div>
      <i onClick={handleClick} className="fas fa-bars"></i>
    </div>
  );
}
