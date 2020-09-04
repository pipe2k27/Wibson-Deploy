import React from "react";
import "./SecondCard.css";

export default function SecondCard() {
  return (
    <div className="second-card">
      <div className="image-box2">
        <div className="phone-box2">
          <img
            src={process.env.PUBLIC_URL + "/images/app-image1.png"}
            alt="logo-word"
            className="phone phone1"
          ></img>
          <img
            src={process.env.PUBLIC_URL + "/images/app-image2.png"}
            alt="logo-word"
            className="phone phone2"
          ></img>
        </div>
      </div>

      <div className="text-box2">
        <div className="text-card2">
          <h1 className="darker-text">
            An app that'll show you <br />
            <span className="golden-text">who has Your Data</span>
            <p className="small-text dark-text text2">
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
          </h1>
        </div>
      </div>
    </div>
  );
}
