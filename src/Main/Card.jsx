import React, { useState, useEffect } from "react";
import CardComponent from "./CardComponent";

import "../CSS/card.css";
const Card = () => {
  const getValue = localStorage.getItem("authorization");
  console.log(getValue);

  const cardComponentText = {
    card1: {
      cardtextheader: "Menu",
      cardtextbody: (
        <>
          다양한 음료와 함께 그에 어울리는 신선한 재료와 풍부한 맛을 <br />
          즐길 수 있는 메뉴 그리고
          <br />
          LD 시그니처 메뉴들을 확인하실 수 있습니다.
        </>
      ),
      cardimage: "main_img1.jpg",
      cardLink: "Menu 바로가기",
      gotocardlink: "/Menu",
    },
    card2: {
      cardtextheader: "Seat",
      cardtextbody: (
        <>
          LD카페는 고객 여러분께 편안하고 아늑한 공간을 제공하기 위해 <br />
          좌석 확인창을 운영하고 있습니다. <br />
          <br />
          이제는 미리 카페에 도착하기 전, 웹을 통해 좌석을 확인해보세요.
        </>
      ),
      cardimage: "main_img2.jpg",
      cardLink: "Seat 바로가기",
      gotocardlink: "/Seat",
    },
    card3: {
      cardtextheader: "Favorites Menu",
      cardtextbody: (
        <>
          자주 선택하는 메뉴들을 <br />
          한눈에 관리하고, 더욱 편리하게 <br />
          주문할 수 있는 즐겨찾기 메뉴를 <br />
          만나보세요.
        </>
      ),
      cardimage: "main_img3.jpg",
      cardLink: "Favorites Menu 바로가기",
      gotocardlink: "/FavoritesMenu",
    },
  };
  return (
    <div className="main-cardcomponent">
      <div className="main-wrapper">
        {getValue ? (
          <>
            <CardComponent {...cardComponentText.card1} cardclass="card1" />
            <CardComponent {...cardComponentText.card2} cardclass="card2" />
            <CardComponent {...cardComponentText.card3} cardclass="card3" />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Card;
