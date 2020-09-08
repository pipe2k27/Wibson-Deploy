import React from "react";
import "./FirstCard.css";
import { Link } from "react-router-dom";

export default function FirstCard() {
  return (
    <div className="first-card">
      <div className="text-box">
        <div className="text-card">
          <h1>
            Control & <br /> <span className="golden-text">Own Your Data</span>
          </h1>
          <p className="small-text">
            Wibson empowers you to control your personal information, find out
            who has your data and decide who should keep it or delete it.
          </p>
          <div className="button-box">
            <a href="https://play.google.com/store/apps/details?id=org.wibson.wallet&hl=en">
              <img
                src={process.env.PUBLIC_URL + "/images/google-button.png"}
                alt="Google-store"
                className="app-button google"
              ></img>
            </a>
            <Link to="/Wibson-Deploy/apple">
              <img
                src={process.env.PUBLIC_URL + "/images/apple-button.png"}
                alt="Google-store"
                className="app-button apple"
              ></img>
            </Link>
          </div>
        </div>
      </div>
      <div className="image-box">
        <img
          src={process.env.PUBLIC_URL + "/images/Fist-resized.png"}
          alt="Fists"
          className="fists"
        ></img>
      </div>
    </div>
  );
}
