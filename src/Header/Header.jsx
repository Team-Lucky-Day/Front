  import React from "react";
import { Link } from "react-router-dom";
import "../CSS/header.css";
const Header = () => {
  return (
    <>
      <Link to="/" className="header-link">
        <div className="header-title">
          <span>Lucky Day</span>
          </div>
      </Link>
    </>
  );
};

export default Header;
