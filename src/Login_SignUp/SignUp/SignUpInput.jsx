import React from "react";
import "../../CSS/container.css";
const SignUpInput = ({ type, className, value, placeholder, onChange }) => {
  const handlePasswordVisibility = () => {
    const input = document.getElementById("password-input");
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  };

  return (
    <div className="input-wrapper">
      <input
        type={type}
        className={className}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        id="password-input"
      />
      {/* {type === "password" && (
        <button
          type="button"
          className="password-toggle"
          onClick={handlePasswordVisibility}
        >
          Show
        </button>
      )} */}
    </div>
  );
};

export default SignUpInput;
