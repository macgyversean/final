import React from "react";

const Footer = () => {
  return (
    <footer className="footerPlan">
      <div>
        <p>© 2022 Photography Page. All rights reserved.</p>
        <ul className="footer-links">
          <ul>
            <a href="/">Home</a>
          </ul>
          <ul>
            <a href="/booking">Gallery</a>
          </ul>
          <ul>
            <a href="/about">About</a>
          </ul>
          <ul>
            <a href="/form">Contact</a>
          </ul>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
