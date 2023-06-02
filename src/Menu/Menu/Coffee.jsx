import React from "react";
import { useState } from "react";
import Cart from "./Cart";
// import Modal from "./Modal"
import './Style.css'


export default function Coffee() {

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
          <button onClick={() => openModal('c_modal1')} type="button" className="btnMenu" id="btn_c1">
            <img src="img/c1.jpg" className="img" alt="coffee" />
          </button>{setIsModalOpen === 'c_modal1'}
          {isModalOpen==='c_modal1' && (
            <div className="container">
              <img src="img/c1.jpg" className="img" alt="coffee" />
              <p>아메리카노</p>
              <p><text className="text">LD만의 특별한 아메리카노</text></p>
              <button className="btn" onClick={closeModal}>닫기</button>
              <button className="btn" onClick={() => Cart.addToCart({ id: 'btn_c1', name: '아메리카노', price: 4000 })}>Keep</button>
            </div>
          )}



          <button onClick={() => openModal('c_modal2')} type="button" className="btnMenu" id="btn_c2">
            <img src="img/c2.jpg" className="img" alt="coffee" />
          </button>{setIsModalOpen === 'c_modal2'}
          {isModalOpen==='c_modal2' && (
            <div className="container">
              <img src="img/c2.jpg" className="img" alt="coffee" />
              <p>카페라떼</p>
              <p><text className="text">Latte is Horse 카페라떼</text></p>
              <button className="btn" onClick={closeModal}>닫기</button>
              <button className="btn">Keep</button>
            </div>
          )}


          <button  onClick={() => openModal('c_modal3')} type="button" className="btnMenu" id="btn_c3">
            <img src="img/c3.jpg" className="img" alt="coffee" />
          </button>{setIsModalOpen === 'c_modal3'}
          {isModalOpen==='c_modal3' && (
            <div className="container">
              <img src="img/c3.jpg" className="img" alt="coffee" />
              <p>카라멜 마끼아또</p>
              <p><text className="text">카라멜 마끼아또 너무 맛있어서 아리가또</text></p>
              <button className="btn" onClick={closeModal}>닫기</button>
              <button className="btn">Keep</button>
            </div>
          )}


        </div>
        <div className="b_div">
          <button onClick={() => openModal('c_modal4')} type="button" className="btnMenu" id="btn_c4">
            <img src="img/c4.jpg" className="img" alt="coffee" />
          </button>{setIsModalOpen === 'c_modal4'}
          {isModalOpen==='c_modal4' && (
            <div className="container">
               <img src="img/c4.jpg" className="img" alt="coffee" />
              <p>바닐라 라뗴</p>
              <p><text className="text">바닐라 라떼 먹고 나한테 바닐라</text></p>
              <button className="btn" onClick={closeModal}>닫기</button>
              <button className="btn">Keep</button>
            </div>
          )}



          <button onClick={() => openModal('c_modal5')} type="button" className="btnMenu" id="btn_c5">
            <img src="img/c5.jpg" className="img" alt="coffee" />
          </button>{setIsModalOpen === 'c_modal5'}
          {isModalOpen==='c_modal5' && (
            <div className="container">
              <img src="img/c5.jpg" className="img" alt="coffee" />
              <p>에스프레소</p>
              <p><text className="text">에스프레소 에~쓰어..</text></p>
              <button className="btn" onClick={closeModal}>닫기</button>
              <button className="btn">Keep</button>
            </div>
          )}

        </div>
      </div>

      <div>
        <Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
      </div>
    </>
  )
}


