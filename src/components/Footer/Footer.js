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

            <Link to="/privacy" className="footer-link golden-text">
              Privacy Policy
            </Link>
            <a className="footer-link golden-text">Terms of Services</a>
            <Link to="/cookies" className="footer-link golden-text">
              Cookies Policy
            </Link>

            <a className="footer-link golden-text">FAQ</a>
          </div>
          <div className="footer-social-media">
            <h4 className="footer-title">Social Media</h4>
            <a className="footer-link golden-text">Twitter</a>
            <a className="footer-link golden-text">Medium</a>
            <a className="footer-link golden-text">Linkedin</a>
            <a className="footer-link golden-text">Instagram</a>
            <a className="footer-link golden-text">Facebook</a>
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
