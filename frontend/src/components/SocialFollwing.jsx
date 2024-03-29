import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollowing() {
  return (
    <div>
      <i className="fab-fa-instagram"></i>
      <a href="https://www.instagram.com/seanexperience/">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}
