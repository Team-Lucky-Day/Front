import { useState, useEffect } from "react";
import React from "react";
import "./Style.css";
import axios from "axios";
import MenuContainer from "./MenuContainer";

export const Tab = () => {
  const [menuImgList, setMenuImgList] = useState([]);
  const [coffeeInfo, setCoffeeInfo] = useState([]);
  const [beverageInfo, setBeverageInfo] = useState([]);
  const [dessertInfo, setDessertInfo] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const [currentTab, clickTab] = useState(0);

  useEffect(() => {
    const getMenuImg = async () => {
      const response = await axios.get("http://localhost:8080/menu/menuList");
      console.log("응답 데이터: ", response.data);
      setMenuImgList(response.data);

      const categoryCoffee = [];
      const categoryBeverage = [];
      const categoryDessert = [];

      response.data.forEach((menuInfo) => {
        if (menuInfo.category === "coffee") {
          categoryCoffee.push(menuInfo);
        } else if (menuInfo.category === "beverage") {
          categoryBeverage.push(menuInfo);
        } else if (menuInfo.category === "dessert") {
          categoryDessert.push(menuInfo);
        }
      });

      setCoffeeInfo(categoryCoffee);
      setBeverageInfo(categoryBeverage);
      setDessertInfo(categoryDessert);
    };

    getMenuImg();
  }, []);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const menuArr = [
    {
      name: "Coffee",
      content: <MenuContainer coffeeInfo={coffeeInfo} addToCart={addToCart} />,
    },
    {
      name: "Beverage",
      content: <MenuContainer coffeeInfo={beverageInfo} addToCart={addToCart} />,
    },
    {
      name: "Dessert",
      content: <MenuContainer coffeeInfo={dessertInfo} addToCart={addToCart} />,
    },
  ];

  const selectMenuHandler = (index) => {
    clickTab(index);
  };
   return (
    <>
      <div>
        <div className="Menu-backGround">
          <div className="Menu-tabMenu">
            {menuArr.map((el, index) => (
              <li
                className={
                  index === currentTab
                    ? "Menu-submenu Menu-focused"
                    : "Menu-submenu"
                }
                onClick={() => selectMenuHandler(index)}
              >
                {el.name}
              </li>
            ))}
          </div>
          <div className="Menu-content-Body">
            <div className="Menu-content">
              <div>{menuArr[currentTab].content}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tab;
