import React from "react";
import { Link } from "react-router-dom";
import "../CSS/mainheader.css";

const MainHeaderBtn = ({ text }) => {
  const handleButtonClick = () => {
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
      button.innerHTML =
        "<div><span>" +
        button.textContent.trim().split("").join("</span><span>") +
        "</span></div>";
    });
  };
  const slicedText = text
    .split("")
    .map((char, index) => <span key={index}>{char}</span>);

  return (
    <>
      <Link to="/Login" className="link">
        <div className="button fast white" onClick={handleButtonClick}>
          <div>{slicedText}</div>
        </div>
      </Link>
    </>
  );
};

export default MainHeaderBtn;
