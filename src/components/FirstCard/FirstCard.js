import React from "react";
import "./FirstCard.css";

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
            <img
              src={process.env.PUBLIC_URL + "/images/google-button.png"}
              alt="Google-store"
              className="app-button google"
            ></img>
            <img
              src={process.env.PUBLIC_URL + "/images/apple-button.png"}
              alt="Google-store"
              className="app-button apple"
            ></img>
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
