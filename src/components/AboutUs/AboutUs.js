import React from "react";
import "./AboutUs.css";
import Mission from "./components/Mission/Mission";
import Team from "./components/Team/Team";
import Papers from "./components/Papers/Papers";

export default function AboutUs() {
  return (
    <div className="about-us">
      <Mission />
      <Team />
      <div className="video light-back center-all">
        <h1 className="dark-text">Own Your Data</h1>
        <div className="vid-container">
          <iframe
            title="wibson"
            className="vid-box"
            src="https://www.youtube.com/embed/bvvKIwrwlJo"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Papers />
    </div>
  );
}
