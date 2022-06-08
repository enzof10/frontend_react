import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const SocialMedia = ({className}) => {
  return (
    <div className={`app__social ${className === "app__primarybg" ? "gray" : "black"}`}>
        <div>
            <BsTwitter />
        </div>
        <div>
            <FaFacebook />
        </div>
        <div>
            <BsInstagram />
        </div>
    </div>
  )
}

export default SocialMedia