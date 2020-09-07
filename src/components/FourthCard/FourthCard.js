import React from "react";
import "./FourthCard.css";

export default function FourthCard() {
  return (
    <div className="fourth-card">
      <div className="text-box4">
        <div className="text-card4">
          <h1 className="darker-text">
            It's Your Data, It's Your{" "}
            <span className="golden-text">Choice!</span>
            <p className="small-text dark-text text4">
              It’s easy to start. Controlling your data and keeping your privacy
              online is in your hands.
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

      <div className="image-box4">
        <div className="hand-box">
          <img
            src={process.env.PUBLIC_URL + "/images/hand.png"}
            alt="logo-word"
            className="hand"
          ></img>
        </div>
      </div>
    </div>
  );
}
