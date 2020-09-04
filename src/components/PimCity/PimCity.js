import React from "react";
import "./PimCity.css";

export default function PimCity() {
  return (
    <div className="pim-city">
      <img
        src={process.env.PUBLIC_URL + "/images/pim-wibson.png"}
        alt="mask"
        className="pim-logo"
      ></img>
      <p className="small-text grey-text pim-text">
        Wibson is part of the European Union project PimCity, whose mission is
        to ensure that citizens, companies and organizations are informed and
        can make respectful and ethical use of personal data.
      </p>
      <div className="read-more">
        <a className="button" href="https://pimcity.com/?page=sommaire">
          Read more!
        </a>
      </div>
    </div>
  );
}
