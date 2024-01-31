import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
        <p className="white"></p>
        <a href="https://github.com/TanmayMachkar" className="github social">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/tanmay-machkar-9369a0299" className="linkedin social">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.instagram.com/_tanaana_02/" className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
    </div>
  );
}