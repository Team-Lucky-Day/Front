import React, { useEffect } from "react";
import "../CSS/mainheader.css";
import "../CSS/card.css";
const MainContainer = ({
  cardtextheader,
  cardtextbody,
  cardimage,
  cardLink,
  gotocardlink
}) => {
  return (
    <>
      <div className="card">
        <img src={`/img/${cardimage}`} alt={cardtextheader} />
        <div className="cardText">
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
