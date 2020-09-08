import React, { useEffect } from "react";
import "./FourthCard.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FourthCard() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

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
          </h1>
        </div>
      </div>

      <div className="image-box4">
        <div className="hand-box">
          <img
            src={process.env.PUBLIC_URL + "/images/hand.png"}
            alt="logo-word"
            className="hand"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
          ></img>
        </div>
      </div>
    </div>
  );
}
