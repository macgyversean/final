import React from "react";
import SocialFollowing from "./SocialFollwing";

const Footer = () => {
  return (
    <footer className="footerPlan">
      <div className="footer-links">
        <ul className="NavLink">
          <a href="/">Home</a>
        </ul>
        <ul className="NavLink">
          <a href="/gallery">Gallery</a>
        </ul>
        <br />
      </div>
      <SocialFollowing />
      <p className="footerText">
        © 2024 SeanExperience Photograpy. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
