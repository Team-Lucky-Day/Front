import React, { useState } from "react";
import "../../CSS/container.css";
import ForgotYourPw from "./ForgotYourPw";
import SocialLogin from "./KakaoLogin/SocialLogin";
const Login = (props) => {
  
  return (
    <div className="container__form container--signin">
      <div className="form" id="form2">
        <h2 className="form__title">ㅤㅤㅤㅤㅤ</h2>
        <input type="text" placeholder="Username" className="input" />
        <input type="password" placeholder="Password" className="input" />
        <ForgotYourPw />
        <button className="btn">
          Login
        </button>
        <div className="divider">
          <span>or</span>
        </div>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
