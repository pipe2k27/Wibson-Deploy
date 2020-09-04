import React from "react";
import "./Principles.css";

export default function Principles() {
  return (
    <div className="principles">
      <h1 className="darker-text">Our Core Principles</h1>
      <div className="principle-box">
        <div className="principle-container">
          <img
            src={process.env.PUBLIC_URL + "/images/transparency.png"}
            alt="transparency"
            className="principle"
          ></img>
          <h3 className="golden-text principle-name">Transparency</h3>
          <p className="small-text dark-text principle-info">
            You have complete visibility into which companies have your data and
            why
          </p>
        </div>
        <div className="principle-container">
          <img
            src={process.env.PUBLIC_URL + "/images/control.png"}
            alt="control"
            className="principle"
          ></img>
          <h3 className="golden-text principle-name">Control</h3>
          <p className="small-text dark-text principle-info">
            You decide whether a company should delete or keep your personal
            information
          </p>
        </div>
        <div className="principle-container">
          <img
            src={process.env.PUBLIC_URL + "/images/fairness.png"}
            alt="fairness"
            className="principle"
          ></img>
          <h3 className="golden-text principle-name">Balance</h3>
          <p className="small-text dark-text principle-info">
            Our aim is to build a trusted data ecosystem for both users and
            companies
          </p>
        </div>
      </div>
    </div>
  );
}
