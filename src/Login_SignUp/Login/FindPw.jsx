import React from "react";
import "../../CSS/container.css";
import FindPwInput from "./FindPwInput";
const FindPw = (props) => {
  return (
    <div className="findpassword__form">
      <div action="#" className="form" id="form1" method="post">
        <h2 className="form__title">Find Password</h2>
        <FindPwInput placeholder=" Username" />
        <FindPwInput placeholder=" Id (Email) " />

        <button className="btn">Find</button>
      </div>
    </div>
  );
};

export default FindPw;
