import React from "react";
import "./ThirdCard.css";

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
