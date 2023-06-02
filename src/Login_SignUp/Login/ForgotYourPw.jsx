import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../../CSS/container.css";
const ForgotYourPw = (props) => {
  const openNewWindow = () => {
    window.open(
      "/FindPw",
      "_blank",
      "top=180, left=420, width=700, height=500, status=no, menubar=no,scrollbars=no"
    );
  };
  return (
    <>
      <p onClick={openNewWindow} className="forgotpwlink forgotlink">
        Forgot your password?
      </p>
    </>
  );
};

export default ForgotYourPw;
