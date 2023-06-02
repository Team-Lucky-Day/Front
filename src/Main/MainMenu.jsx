import React from "react";
const MainMenu = ({ href,text }) => {
  return (
    <>
      <nav>
        <a href={href} className="menulink">{text}</a>
      </nav>
    </>
  );
};

export default MainMenu;
