import React from "react";
import { useState } from "react";
import Cart from "./Cart";
// import Modal from "./Modal"
import './Style.css'


export default function Coffee(props) {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  };//cart에 목록 추가, 삭제

  const [isModalOpen, setIsModalOpen] = useState('modalId');

  const openModal = (modalId) => {
    setIsModalOpen(modalId);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (

    <>
    <div>
      <div className="b_div">
        {props.coffeeInfo.map( (coffeeInfo, index) => (
          <div>
            <button
              onClick={() => openModal(index)}
              type="button"
              className="btnMenu"
              id="btn_b3"
            >
              <img src={`data:imge/jpeg;base64,${coffeeInfo.imageBytes}`} className="img" alt={coffeeInfo.name} />
            </button>

            {isModalOpen === index && (
            <div className="containerMenu">
              <img src={`data:image/jpeg;base64,${coffeeInfo.imageBytes}`} className="img" alt={coffeeInfo.name} />
              <p className="mini_title">{coffeeInfo.name}</p>
              <p><text className="text1">{coffeeInfo.content}</text></p>
              <button className="btnMenu" onClick={closeModal}>닫기</button>
              <button className="btnMenu" onClick={() => 
                Cart.addToCart(
                  { 
                    id: 'btn_c1', 
                    name: `${coffeeInfo.name}`, 
                    price: `${coffeeInfo.price}` 
                    })}>
                      Keep
              </button>
            </div>
          )}
          </div>
        ))
        }
      </div>
    </div>
      
      
      {/* <div>
        <Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
      </div> */}
    </>
  )
}


