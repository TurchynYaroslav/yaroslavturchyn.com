import React from "react";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__auth">© Yaroslav Turchyn 2024</p>
      <div className="footer__social_items">
        <a href="">Github</a>
        <a href="">Twitter</a>
        <a href="">Instagram</a>
      </div>
    </div>
  );
};

export default Footer;
