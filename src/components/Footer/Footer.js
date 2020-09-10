import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const MyForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div>
      <div className="footer-form-container">
        <input
          className="footer-email"
          ref={(node) => (email = node)}
          type="email"
          placeholder="Your email"
        />
        <br />
        <button className="button footer-button" onClick={submit}>
          Submit
        </button>
      </div>
      <br />
      {status === "sending" && (
        <div className="subscribe-message">sending...</div>
      )}
      {status === "error" && (
        <div
          className="subscribe-message"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="subscribe-message"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </div>
  );
};

export default function Footer() {
  const url =
    "https://wibson.us17.list-manage.com/subscribe/post?u=c7c328a7d3ab8f8b649cf066d&id=4395ef8d87";

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
            <Link to="/terms" className="footer-link golden-text">
              Terms of Services
            </Link>

            <Link to="/cookies" className="footer-link golden-text">
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
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <div>
                <MyForm
                  onValidated={(formData) => {
                    subscribe(formData);
                    console.log(formData);
                  }}
                  status={status}
                  message={message}
                />
              </div>
            )}
          />
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
