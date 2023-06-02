import { useState } from "react";
import React from "react";
import "./Style.css";
import Coffee from "./Coffee";
import Beverage from "./Beverage";
import Dessert from "./Dessert";
import Cart from "./Cart";
// import Modal from "./Modal";

export const Tab = () => {
  const [currentTab, clickTab] = useState(0);
  // Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한
  // currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0.

  const menuArr = [
    {
      name: "Coffee",
      content: <Coffee />,
    },

    { name: "Beverage", content: <Beverage /> },

    { name: "Dessert", content: <Dessert /> },
  ];

  const selectMenuHandler = (index) => {
    clickTab(index);
  };
  // parameter로 현재 선택한 index 값을 전달해야 하며,
  // 이벤트 객체(event)는 쓰지 않는다
  // 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신.

  return (
    <>
      <div>
        <div className="backGround">
          <a href="/">
            <h1 className="title">Lucky Day</h1>
          </a>

          <div className="tabMenu">
            {/* // 아래 하드코딩된 내용 대신에, map을 이용한 반복으로 코드를 수정
         // li 엘리먼트의 class명의 경우 선택된 tab 은 'submenu focused', 나머지 2개의 tab은 'submenu'  */}
            {/* <li className="submenu">{menuArr[0].name}</li>
          <li className="submenu">{menuArr[1].name}</li>
          <li className="submenu">{menuArr[2].name}</li> */}
            {menuArr.map((el, index) => (
              <li
                className={index === currentTab ? "submenu focused" : "submenu"}
                onClick={() => selectMenuHandler(index)}
              >
                {el.name}
              </li>
            ))}
          </div>
          <div className="content">
            <Cart />
            <div>{menuArr[currentTab].content}</div>

            {/* <Modal/> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tab;
