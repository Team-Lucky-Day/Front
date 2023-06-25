import React from "react";
import Header from "../Header/Header";
import MypageMenuBar from "./MypageMenuBar";
import MypageBody from "./MypageBody";
import "../CSS/mypage.css";
const Mypage = () => {
  return (
    <>
      <Header />
      <div className="mypage-body">
        <MypageMenuBar />
        <MypageBody />
      </div>
    </>
  );
};

export default Mypage;
