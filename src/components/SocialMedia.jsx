import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";

const SocialMedia = ({ className }) => {
  return (
    <div className={`app__social`}>
      <a
        href="https://www.instagram.com/enzofriasborda/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/enzo-frias-borda/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://www.github.com/enzof10"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
    </div>
  );
};

export default SocialMedia;
