import React from "react";
import SocialFollowing from "./SocialFollwing";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footerPlan">
      <div className="footer-links">
        <ul className="NavLink">
          <a href="/">Home</a>
        </ul>
        <ul className="NavLink">
          <Link to="/gallery">Gallery</Link>
        </ul>
        <ul className="NavLink">
          <Link to="/form4">Contact</Link>
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
