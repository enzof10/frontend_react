import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const Navbar = () => {
  const sections = [
    "home",
    "about",
    "work",
    "skills",
    "testimonial",
    "contact",
  ];
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logoEnzo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {sections.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div></div>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} style={{display : toggle ?  "none": ""}} />
        <div className={toggle ? "show" : "hide"}>
          <HiX onClick={() => setToggle(false)} />
          <ul>
            {sections.map((item) => (
              <li key={item}>
                <a href={`#${item}`} onClick={() => setToggle(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
