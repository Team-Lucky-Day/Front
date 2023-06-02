import React from "react";
import "../../CSS/container.css";
const FindPwInput = (props) => {
  return (
    <div>
      <input type="text" placeholder={props.placeholder} className="input" />
    </div>
  );
};

export default FindPwInput;
