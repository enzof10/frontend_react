import React, { useState } from "react";
import "./Footer.scss";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <h2 className="head-text">take a coffe & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:enzo_17_05@hotmail.com" className="p-tex">enzo_17_05@hotmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+54 (2314) 554696" className="p-tex">mi tel</a>
        </div>
      </div>
      <div className="app__footer-form app__flex">
        <div className="app__flex">
        <input type="text" className="text"  placeholder="your name" value={name} onChange={handleChanh}/>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
