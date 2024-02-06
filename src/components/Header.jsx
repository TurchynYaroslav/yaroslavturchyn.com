import React from "react";
import "../styles/Header.css";
import Logo from "../static/img/logo.svg";
import { Link } from "react-router-dom";
import NavItem from "./header_comps/NavItem";

const Header = () => {
  return (
    <nav className="header">
      <Link to="/" className="Nav__link Nav__brand">
        <img className="Nav__logo" src={Logo} alt="Logo" />
        <h1 className="Nav__title">Yaroslav Turchyn</h1>
      </Link>
      <div className="Nav__right">
        <ul className="Nav__item-wrapper">
          <NavItem to="/stack">Stack</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/about">About</NavItem>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
