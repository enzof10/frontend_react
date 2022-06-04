import React, { useState } from "react";
import "./Footer.scss";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const contact = {
      __typename: "Contact",
      name,
      email,
      message,
    };

    client.createContact(contact).then((res) => {
      setLoading(false);
      setIsSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">take a coffe & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:enzo_17_05@hotmail.com" className="p-tex">
            enzo_17_05@hotmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+54 (2314) 554696" className="p-tex">
            mi tel
          </a>
        </div>
      </div>
      {!isSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="text"
              placeholder="your name"
              value={name}
              name="name"
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="text"
              className="text"
              placeholder="your email"
              value={email}
              name="email"
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="your message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
            <button className="p-text" onClick={handleOnSubmit}>
              {loading ? "sending" : "send Message"} send message
            </button>
        </div>
      ) : (
        <div>
          <h2 className="head-text">thanks for your message</h2>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
