import React from "react";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__auth">© Yaroslav Turchyn 2024</p>
      <div className="footer__social_items">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/TurchynYaroslav/"
        >
          Github
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/nehxbyaroslav"
        >
          Twitter
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/nehx.by?igsh=MTF3dDRhYWZlamx4cg=="
        >
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Footer;
