import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import Cart from './Cart';
import axios from "axios";
const MenuContainer = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);


  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    swal({
      title: "Success",
      text: "장바구니에 추가되었습니다!",
      icon: "success",
      buttons: false,
      timer: 1500,
    });
    setTimeout(() => {
      swal.close();
    }, 1000);
  };

  const openModal = (coffeeInfo) => {
    setSelectedMenu(coffeeInfo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addToFavorites = (coffeeInfo) => {
    swal("Success", "Added to Favorites!", "success");
  };

  const coffeeItems = props.coffeeInfo.filter(item => item.category === 'coffee');
  const beverageItems = props.coffeeInfo.filter(item => item.category === 'beverage');
  const dessertItems = props.coffeeInfo.filter(item => item.category === 'dessert');
const removeFromCart = (itemToRemove) => {
  console.log(cartItems);
  for (let i = 0; i <= cartItems.length; i++) {
    console.log(i, itemToRemove);
    const updatedCartItems = cartItems.filter((i) => i === itemToRemove);
    setCartItems(updatedCartItems);
  }
};

  return (
    <>
      <div className="Menu-b_div-wrapper">
        <div className="Menu-b_div">
          <div className="Menu-b_div_container"> 
            {coffeeItems.map((coffeeInfo, index) => (
              <div key={index}>
                <button
                  onClick={() => openModal(coffeeInfo)}
                  type="button"
                  className="Menu-btnMenu_Body"
                  id={index}
                >
                  <img
                    src={`data:imge/jpeg;base64,${coffeeInfo.imageBytes}`}
                    className="img"
                    alt={coffeeInfo.name}
                  />
                </button>
                <p className="Menu-btnMenu_menuName">{coffeeInfo.name}</p>
              </div>
            ))}
          </div>

          <div>
            {beverageItems.map((beverageInfo, index) => (
              <div key={index}>
                <button
                  onClick={() => openModal(beverageInfo)}
                  type="button"
                  className="Menu-btnMenu_Body"
                  id={index}
                >
                  <img
                    src={`data:imge/jpeg;base64,${beverageInfo.imageBytes}`}
                    className="img"
                    alt={beverageInfo.name}
                  />
                </button>
                <p className="Menu-btnMenu_menuName">{beverageInfo.name}</p>
              </div>
            ))}
          </div>

          <div>
            {dessertItems.map((dessertInfo, index) => (
              <div key={index}>
                <button
                  onClick={() => openModal(dessertInfo)}
                  type="button"
                  className="Menu-btnMenu_Body"
                  id={index}
                >
                  <img
                    src={`data:imge/jpeg;base64,${dessertInfo.imageBytes}`}
                    className="img"
                    alt={dessertInfo.name}
                  />
                </button>
                <p className="Menu-btnMenu_menuName">{dessertInfo.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && selectedMenu && (
        <div className="Menu-containerMenu">
          <div>
            <button className="Menu-btnMenu-close" onClick={closeModal}>
              X
            </button>
          </div>
          <img
            src={`data:image/jpeg;base64,${selectedMenu.imageBytes}`}
            className="img"
            alt={selectedMenu.name}
          />
          <p className="Menu-mini_title">{selectedMenu.name}</p>
          <p>
            <text className="Menu-text1">{selectedMenu.content}</text>
          </p>
          <button
            className="Menu-btnMenu-favorite"
            onClick={() => addToFavorites(selectedMenu)}
          >
            즐겨찾기
          </button>
          <button
            className="Menu-btnMenu"
            onClick={() => addToCart(selectedMenu)}
          >
            장바구니
          </button>
        </div>
      )}
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        setCartItems={setCartItems}
        
      />
    </>
  );
};

export default MenuContainer;
