import React from "react";
import "./ThirdCard.css";
import { Link } from "react-router-dom";

export default function ThirdCard() {
  return (
    <div className="third-card">
      <div className="text-box3">
        <div className="text-card3">
          <h1 className="light-text">
            Discover. <br />
            <span className="golden-text">Take Action.</span>
          </h1>

          <p className="small-text light-text text3">
            Discover how many companies have your personal information a get a
            privacy score. Then decide who can hold your data and who should
            delete it!
          </p>
          <div className="button-box">
            <a href="https://play.google.com/store/apps/details?id=org.wibson.wallet&hl=en">
              <img
                src={process.env.PUBLIC_URL + "/images/google-button.png"}
                alt="Google-store"
                className="app-button google"
              ></img>
            </a>
            <Link to="/apple">
              <img
                src={process.env.PUBLIC_URL + "/images/apple-button.png"}
                alt="Google-store"
                className="app-button apple"
              ></img>
            </Link>
          </div>
        </div>
      </div>
      <div className="image-box3">
        <div className="phone-box3">
          <img
            src={process.env.PUBLIC_URL + "/images/app-image2.png"}
            alt="logo-word"
            className="only-phone"
          ></img>
        </div>
      </div>
    </div>
  );
}
