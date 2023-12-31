import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Cart({ cartItems, removeFromCart, setCartItems }) {

  const handleRemove = () => {
    setCartItems([]);
  };
  const navigate = useNavigate();
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
    
    const data = localStorage.getItem("authorization");
    console.log(data)

    const cartItemsDict = cartItems.reduce((dict, item) => {
      dict[item.menuCode] = item.quantity;
      return dict;
    }, {});

    console.log(cartItemsDict);
    const itemNames = Object.keys(cartItemsDict);
    const itemCount = Object.values(cartItemsDict); 

    console.log("itemNames:", itemNames);
    console.log("itemCount:", itemCount);

    axios({
      url: "http://localhost:8080/card/payment",
      method: "post",
      data: {
        orderList: cartItemsDict,
      },
      baseURL: "http://localhost:3000/Menu",
      headers: { Authorization: data },
    })
      .then(function (response) {
        console.log("요청이 성공했습니다!");
        navigate("/");
      })
      .catch(function (response) {
        Swal.fire({
          title : "카드정보 오류",
          text : "마이페이지에서 카드정보를 입력해주세요!",
          confirmButtonText : "확인"
        })
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
      itemToUpdate.quantity = Math.max((itemToUpdate.quantity || 1) - 1, 0);
    }
    setCartItems(updatedCartItems);
    console.log(itemToUpdate.quantity);
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
              {item.name}
            </div>
            <div className="Menu-cart-container-MenuList-quantity">
              <input
                type="button"
                className="Menu-plusBtn"
                onClick={() => count("minus", index)}
                value="-"
              />
              <div id="result">{item.quantity || 0}</div>
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
