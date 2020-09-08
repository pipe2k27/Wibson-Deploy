import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-grid">
        <div className="footer-text">
          <div className="footer-company">
            <h4 className="footer-title">Company</h4>
            <Link to="/about-us" className="footer-link golden-text">
              About us
            </Link>

            <Link to="/Wibson-Deploy/privacy" className="footer-link golden-text">
              Privacy Policy
            </Link>
            <Link to="/Wibson-Deploy/terms" className="footer-link golden-text">
              Terms of Services
            </Link>

            <Link to="/Wibson-Deploy/cookies" className="footer-link golden-text">
              Cookies Policy
            </Link>

            <a
              className="footer-link golden-text"
              href="https://wibson.zendesk.com/hc/en-us/categories/360003263372-FAQ-"
            >
              FAQ
            </a>
          </div>
          <div className="footer-social-media">
            <h4 className="footer-title">Social Media</h4>
            <a
              className="footer-link golden-text"
              href="https://twitter.com/WibsonOrg"
            >
              Twitter
            </a>
            <a
              className="footer-link golden-text"
              href="https://medium.com/wibson"
            >
              Medium
            </a>
            <a
              className="footer-link golden-text"
              href="https://www.linkedin.com/company/wibson/"
            >
              Linkedin
            </a>
            <a
              className="footer-link golden-text"
              href="https://www.instagram.com/wibson_org/"
            >
              Instagram
            </a>
            <a
              className="footer-link golden-text"
              href="https://www.facebook.com/WibsonOrg/"
            >
              Facebook
            </a>
          </div>
        </div>
        <div className="footer-subscribe">
          <h4 className="footer-title">Subscribe</h4>
          <p className="grey-text subscribe-text">
            Get access to latest news and all the features by subcribing here.
          </p>
          <form className="footer-form">
            <div className="footer-form-container">
              <input
                type="text"
                name="email"
                placeholder="E-Mail Adress"
                className="footer-email"
              ></input>
              <a className="button footer-button">Subscribe</a>
            </div>
          </form>
          <img
            src={process.env.PUBLIC_URL + "/images/WibsonLogoGrey.png"}
            alt="Google-store"
            className="footer-logo"
          ></img>
        </div>
      </div>
    </div>
  );
}
