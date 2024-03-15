import React from "react";

const Footer = () => {
  return (
    <footer className="footerPlan">
      <p>© 2022 Photography Page. All rights reserved.</p>
      <ul className="footer-links">
        <ul>
          <a href="/">Home</a>
        </ul>
        <ul>
          <a href="/gallery">Gallery</a>
        </ul>
        <ul>
          <a href="/about">About</a>
        </ul>
        <ul>
          <a href="/contact">Contact</a>
        </ul>
      </ul>
    </footer>
  );
};

export default Footer;
