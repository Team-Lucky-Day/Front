import React from "react";

const MypageMenuBarContainer = ({ menuName, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <>
      <div
        className="mypageMenuBarContainer"
        style={{ borderBottom: "2px solid gray" }}
        onClick={handleClick}
      >
        {menuName}
      </div>
    </>
  );
};

export default MypageMenuBarContainer;
