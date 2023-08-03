import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Cart({ cartItems, removeFromCart, setCartItems }) {
  // useEffect(() => {
  //   console.log("render");
  //   const data = localStorage.getItem("authorization");
  //   console.log(data);
  //   axios({
  //     url: "http://localhost:8080/menu/menuList",
  //     method: "post",
  //     baseURL: "http://localhost:3000/Menu",
  //     headers: { Authorization: data },
  //   })
  //     .then(function (response) {
  //       // 성공적인 응답 (200 OK)
  //       console.log("요청이 성공했습니다!");

  //       const data = `Bearer ${response.data}`;
  //       // 로그인 성공 시 localStorage에 데이터 저장
  //       localStorage.setItem("authorization", data);
  //       console.log(response.data);
  //     })
  //     .catch(function (response) {
  //       console.log("요청이 실패했습니다. 상태 코드:", response.status);
  //     });

  //   // getMenuList();
  // }, []);

  const handleRemove = () => {
    setCartItems([]);
  };
  const [menuList, setMenuList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/menu/menuList");
        setMenuList(response.data);
      } catch (error) {
        console.log("Error fetching menuList:", error);
      }
    };

    fetchData();
  }, []);
  const handlePayment = async () => {
    const itemNames = cartItems.map((item) => item.menuCode);
    console.log(
      "Cart Contents:",
      cartItems.map((item) => item.menuCode)
    );

    const data = localStorage.getItem("authorization");
    axios({
      url: "http://localhost:8080/card/payment",
      method: "post",
      data: {
        m_code: itemNames,
      },
      baseURL: "http://localhost:3000/Menu",
      headers: { Authorization: data },
    })
      .then(function (response) {
        console.log("요청이 성공했습니다!");
        

        const dd = `Bearer ${response.data}`;
        // 로그인 성공 시 localStorage에 데이터 저장
        localStorage.setItem("authorization", dd);
      })
      .catch(function (response) {
        console.log("요청이 실패했습니다. 오류:", response);
        // Handle the error here
      });

  };
  const count = (type, index) => {
    const updatedCartItems = [...cartItems];
    const itemToUpdate = updatedCartItems[index];

    if (type === "plus") {
      itemToUpdate.quantity = (itemToUpdate.quantity || 0) + 1;
    } else if (type === "minus") {
      itemToUpdate.quantity = Math.max((itemToUpdate.quantity || 0) - 1, 0);
    }

    setCartItems(updatedCartItems);
  };

  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="Menu-cart">
      <h2 className="Menu-cartText1">장바구니</h2>

      <ul className="Menu-cart-container">
        {cartItems.map((item, index) => (
          <li key={item.id} className="Menu-cart-container-MenuList">
            <div className="Menu-cart-container-MenuList-itemName">
              {menuList[index]?.name}
            </div>
            <div className="Menu-cart-container-MenuList-quantity">
              <input
                type="button"
                className="Menu-plusBtn"
                onClick={() => count("minus", index)}
                value="-"
              />
              <div id="result">{item.quantity || 1}</div>
              <input
                type="button"
                className="Menu-minusBtn"
                onClick={() => count("plus", index)}
                value="+"
              />
            </div>
            <button
              className="Menu-cart-Menu-removeBtn"
              onClick={() => handleRemoveItem(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <div className="Menu-cart-Menu-close-container">
        <button className="Menu-cart-Menu-close" onClick={handlePayment}>
          결제하기
        </button>
      </div>
    </div>
  );
}
