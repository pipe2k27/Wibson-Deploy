import React from "react";
import "./Papers.css";

export default function Papers() {
  return (
    <div className="papers text-center div-center">
      <h1 className="golden-text padding50">Technical Documents</h1>
      <div className="papers-grid center-all">
        <div className="paper">
          <a href="https://arxiv.org/pdf/2002.09689v1.pdf">
            <img
              src={process.env.PUBLIC_URL + "/images/paper1.png"}
              alt="member"
              className="member-pic"
            ></img>
          </a>
          <p className="small-text dark-text">
            We construct a privacy-preserving, distributed and decentralized
            marketplace where parties can exchange...
          </p>
        </div>
        <div className="paper">
          <a href="https://arxiv.org/pdf/2002.03810.pdf">
            <img
              src={process.env.PUBLIC_URL + "/images/paper2.png"}
              alt="member"
              className="member-pic"
            ></img>
          </a>

          <p className="small-text dark-text">
            ﻿We present a cryptographic primitive called WibsonTree designed to
            preserve users’ privacy by allowing them...{" "}
          </p>
        </div>
        <div className="paper">
          <a href="https://wibson.org/wp-content/uploads/2019/09/Secure_Exchange_of_Digital_Goods_in_a_Decentralize.pdf">
            <img
              src={process.env.PUBLIC_URL + "/images/paper3.png"}
              alt="member"
              className="member-pic"
            ></img>
          </a>

          <p className="small-text dark-text">
            We are tackling the problem of trading real-world private
            information using only cryptographic protocols and...{" "}
          </p>
        </div>
        <div className="paper">
          <a href="https://arxiv.org/pdf/2002.02316.pdf">
            <img
              src={process.env.PUBLIC_URL + "/images/paper4.png"}
              alt="member"
              className="member-pic"
            ></img>
          </a>

          <p className="small-text dark-text">
            BatPay is a proxy scaling solution for the transfer of ERC20 tokens.
            It is suitable for micropayments...{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
