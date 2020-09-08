import React, { useEffect } from "react";
import "./AppleIos.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AppleIos() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <div className="apple center-all dark-back padding20">
      <div className="apple-grid center-all">
        <img
          src={process.env.PUBLIC_URL + "/images/wibson-ios.png"}
          alt="apple ios"
          className="apple-phone"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="800"
          data-aos-easing="ease-in-sine"
        ></img>
        <div className="apple-text">
          <h1 className="golden-text">Coming Soon!</h1>
          <p className="light-text small-text">
            The Wibson App for IOS devices is coming soon. Leave your email
            bellow and be the first to know!
          </p>
          <form className="apple-form">
            <div className="apple-form-container">
              <input
                type="text"
                name="email"
                placeholder="E-Mail Adress"
                className="apple-email"
              ></input>
              <div className="apple-button-box">
                <a className="button apple-button">Let Me Know!</a>
              </div>
            </div>
          </form>
          <i class="fab fa-apple apple-icon"></i>
        </div>
      </div>
    </div>
  );
}
