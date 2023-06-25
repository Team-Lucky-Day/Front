import React, { useState } from "react";
import "../../../CSS/SocialLogin.css";
const Rest_api_key = "381590a49ad13906a4df97ebbc42d353"; //REST API KEY
const redirect_uri = "http://localhost:3000/auth"; //Redirect URI
// oauth 요청 URL
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
const handleLogin = () => {
  window.location.href = kakaoURL;
};
const SocialLogin = (props) => {
  return (
    <div>
      <>
        <div className="social_login">
          <button
            className="kakao"
            onClick={() =>
              window.open(
                "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=a1b987111dbb4e0250bf964e8d93b269&redirect_uri=http://localhost:8080/auth/kakao/callback"
              )
            }
          >
            <div className="kakaoLogo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="19"
                height="35"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#263238"
                  d="M24,4C12.402,4,3,11.611,3,21c0,5.99,3.836,11.245,9.618,14.273l-2.219,7.397	c-0.135,0.449,0.366,0.82,0.756,0.56l8.422-5.615C21.004,37.863,22.482,38,24,38c11.598,0,21-7.611,21-17S35.598,4,24,4z"
                ></path>
                <path
                  fill="#ffca28"
                  d="M15,18H9c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h6c0.552,0,1,0.448,1,1v0	C16,17.552,15.552,18,15,18z"
                ></path>
                <path
                  fill="#ffca28"
                  d="M25,26v-9c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v9c0,0.552-0.448,1-1,1h0	C25.448,27,25,26.552,25,26z"
                ></path>
                <path
                  fill="#ffca28"
                  d="M32,26v-9c0-0.552,0.448-1,1-1l0,0c0.552,0,1,0.448,1,1v9c0,0.552-0.448,1-1,1l0,0	C32.448,27,32,26.552,32,26z"
                ></path>
                <path
                  fill="#ffca28"
                  d="M32.621,21.207l4.914-4.914c0.391-0.391,1.024-0.391,1.414,0v0c0.391,0.391,0.391,1.024,0,1.414	l-4.914,4.914c-0.391,0.391-1.024,0.391-1.414,0l0,0C32.231,22.231,32.231,21.598,32.621,21.207z"
                ></path>
                <path
                  fill="#ffca28"
                  d="M36.078,20.665l3.708,4.717c0.341,0.434,0.266,1.063-0.168,1.404l0,0	c-0.434,0.341-1.063,0.266-1.404-0.168l-3.708-4.717c-0.341-0.434-0.266-1.063,0.168-1.404v0	C35.108,20.156,35.737,20.231,36.078,20.665z"
                ></path>
                <path
                  fill="#ffca28"
                  d="M30,27h-4c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1v0	C31,26.552,30.552,27,30,27z"
                ></path>
                <path
                  fill="#ffca28"
                  d="M23.933,25.642l-3.221-9c-0.145-0.379-0.497-0.611-0.878-0.629c-0.111-0.005-0.54-0.003-0.641-0.001	c-0.392,0.007-0.757,0.241-0.906,0.63l-3.221,9c-0.198,0.516,0.06,1.094,0.576,1.292s1.094-0.06,1.292-0.576L17.42,25h4.16	l0.486,1.358c0.198,0.516,0.776,0.773,1.292,0.576S24.131,26.157,23.933,25.642z M18.136,23l1.364-3.812L20.864,23H18.136z"
                ></path>
                <path
                  fill="#ffca28"
                  d="M13,18h-2v8c0,0.552,0.448,1,1,1h0c0.552,0,1-0.448,1-1V18z"
                ></path>
              </svg>
            </div>
            Start with Kakao
          </button>
          <button className="github">Start with Github</button>
          <div className="clearfix"></div>
        </div>
      </>
    </div>
  );
};

export default SocialLogin;
