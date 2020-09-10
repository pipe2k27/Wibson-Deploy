import React, { useEffect } from "react";
import "./AppleIos.css";
import AOS from "aos";
import "aos/dist/aos.css";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const AppleForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div>
      <div className="apple-form-container">
        <input
          className="apple-email"
          ref={(node) => (email = node)}
          type="email"
          placeholder="Your email"
        />
        <div className="apple-button-box">
          <button className="button apple-button" onClick={submit}>
            Let Me Know!
          </button>
        </div>
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

export default function AppleIos() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 500,
    });
  }, []);

  const url =
    "https://wibson.us17.list-manage.com/subscribe/post?u=c7c328a7d3ab8f8b649cf066d&id=4395ef8d87";

  return (
    <div className="center-all dark-back padding20">
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
          <div className="apple-form">
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <div>
                  <AppleForm
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
          </div>
          <i class="fab fa-apple apple-icon"></i>
        </div>
      </div>
    </div>
  );
}
