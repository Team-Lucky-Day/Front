import React from "react";
import "../CSS/main.css";
import "../CSS/card.css";
const MainContainer = ({
  cardtextheader,
  cardtextbody,
  cardimage,
  cardLink,
  gotocardlink,
}) => {
  return (
    <>
      <div className="main-card">
        <img src={`/img/${cardimage}`} alt={cardtextheader} />
        <div className="main-cardText">
          <h1>{cardtextheader}</h1>
          <p>{cardtextbody}</p>
          <a href={gotocardlink}>
            <button>{cardLink}</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
