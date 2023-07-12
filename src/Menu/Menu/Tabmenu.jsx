import { useState, useEffect } from "react";
import React from "react";
import "./Style.css";
import Coffee from "./Coffee";
import Beverage from "./Beverage";
import Dessert from "./Dessert";
import Cart from "./Cart";
import axios from "axios"
// import Modal from "./Modal";

export const Tab = () => {
  const [menuImgList, setMenuImgList] = useState([]);
  const [coffeeInfo, setCoffeeInfo] = useState([]);
  const [beverageInfo, setBeverageInfo] = useState([]);
  const [dessertInfo, setDessertInfo] = useState([]);

  const [currentTab, clickTab] = useState(0);
  // Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한
  // currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0.

  useEffect( () => {
    const getMenuImg = async () => {
      const response = await axios.get('http://localhost:8080/admin/menuList')
      console.log("응답 데이터 : ", response.data)
      setMenuImgList(response.data);

      const categoryCoffee = [];
      const categoryBeverage = [];
      const categoryDessert = [];

      response.data.forEach( (menuInfo) => {
        if (menuInfo.category === "coffee"){
          categoryCoffee.push(menuInfo);
        }else if(menuInfo.category === "beverage"){
          categoryBeverage.push(menuInfo);
        }else if (menuInfo.category === "dessert"){
          categoryDessert.push(menuInfo);
        }
      });

      setCoffeeInfo(categoryCoffee);
      setBeverageInfo(categoryBeverage);
      setDessertInfo(categoryDessert);
    };

    getMenuImg();

  },[])

  
  console.log("커피 리스트 : ", coffeeInfo);
  console.log("음료 리스트 : ", beverageInfo);
  console.log("디저트 리스트 : ", dessertInfo);
  const menuArr = [
    {
      name: "Coffee",
      content: <Coffee coffeeInfo = {coffeeInfo}/>,
    },

    { 
      name: "Beverage", 
      content: <Beverage beverageInfo = {beverageInfo}/> 
    },

    { 
      name: "Dessert", 
      content: <Dessert dessertInfo = {dessertInfo}/> 
    },
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
        <div className="Menu-backGround">
          <a href="/">
            <h1 className="Menu-title">Lucky Day</h1>
          </a>

          <div className="Menu-tabMenu">
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

          <div className="Menu-content">
            <div>{menuArr[currentTab].content}</div>
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tab;
