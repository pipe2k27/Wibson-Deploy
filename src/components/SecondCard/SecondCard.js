import React, { useEffect } from "react";
import "./SecondCard.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SecondCard() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <div className="second-card">
      <div className="image-box2">
        <div className="phone-box2">
          <img
            src={process.env.PUBLIC_URL + "/images/app-image1.png"}
            alt="logo-word"
            className="phone phone1"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
          ></img>
          <img
            src={process.env.PUBLIC_URL + "/images/app-image2.png"}
            alt="logo-word"
            className="phone phone2"
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
          ></img>
        </div>
      </div>

      <div className="text-box2">
        <div className="text-card2">
          <h1 className="darker-text">
            An app that'll show you <br />
            <span className="golden-text">who has Your Data</span>
          </h1>

          <p className="small-text dark-text text2">
            For years internet has been collecting your data. Get the
            transparency and control that you deserve. Be a #DataOwner
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
    </div>
  );
}
