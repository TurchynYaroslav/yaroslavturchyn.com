import React from "react";
import { Link } from "react-router-dom";
const NavItem = ({ to, children }) => {
  return (
    <li className="Nav__item">
      <Link to={to} className="Nav__link">
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
