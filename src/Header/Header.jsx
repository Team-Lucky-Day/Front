import React from "react";
import { Link } from "react-router-dom";
import "../CSS/header.css";
const Header = () => {
  return (
    <>
      <Link to="/" className="link">
        <div className="title">Lucky Day</div>
      </Link>
    </>
  );
};

export default Header;
