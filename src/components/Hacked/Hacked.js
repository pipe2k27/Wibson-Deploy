import React, { useState, useEffect } from "react";
import "./Hacked.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hacked() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <div className="hacked">
      <img
        src={process.env.PUBLIC_URL + "/images/code.png"}
        alt="code"
        className="code code1"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-easing="ease-in-sine"
      ></img>

      <img
        src={process.env.PUBLIC_URL + "/images/code-md.png"}
        alt="code"
        className="code code2"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
        data-aos-offset="200"
      ></img>

      <img
        src={process.env.PUBLIC_URL + "/images/code-sm.png"}
        alt="code"
        className="code code3"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
        data-aos-offset="300"
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
          Check out whether your data was stolen during any data breaches!
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
