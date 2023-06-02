import React, { useState } from "react";
import Login from "./Login/Login";
import "../CSS/container.css";
import SignUp from "./SignUp/SignUp";

const Container = (props) => {
  const [containerActive, setContainerActive] = useState(false);
  const handleSignInClick = () => {
    setContainerActive(false);
  };

  const handleSignUpClick = () => {
    setContainerActive(true);
  };
  return (
    <div className={`container ${containerActive ? "right-panel-active" : ""}`}>
      <Login />
      <SignUp />
      <div className="container__overlay">
        <div className="overlay">
          <div className="overlay__panel overlay--left">
            <button className="btn" onClick={handleSignInClick}>
              Login
            </button>
          </div>
          <div className="overlay__panel overlay--right">
            <button className="btn" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
