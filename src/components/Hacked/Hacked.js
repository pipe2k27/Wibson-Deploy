import React from "react";
import "./Hacked.css";

export default function Hacked() {
  return (
    <div className="hacked">
      <img
        src={process.env.PUBLIC_URL + "/images/code2.png"}
        alt="code"
        className="code"
      ></img>
      <div className="hacked-container">
        <img
          src={process.env.PUBLIC_URL + "/images/logo_gold.svg"}
          alt="mask"
          className="logo-hacked"
        ></img>
        <h1>
          Check if you have been <span className="golden-text">Hacked!</span>
        </h1>
        <p className="small-text light-text hacked-text">
          Check out wheather your data was stolen during any data breaches!
        </p>
        <img
          src={process.env.PUBLIC_URL + "/images/mask.png"}
          alt="mask"
          className="mask"
        ></img>
      </div>
    </div>
  );
}
