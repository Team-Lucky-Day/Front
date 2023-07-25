import React, { useState } from "react";
import Cart from "./Cart";
import swal from "sweetalert";
import "./Style.css";

export default function Coffee(props) {
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

  const removeFromCart = (itemToRemove) => {
    // Filter out the item to remove from the cartItems array
    console.log(cartItems);
    for (let i = 0; i <= cartItems.length; i++) {
      console.log(i, itemToRemove);
      const updatedCartItems = cartItems.filter((i) => i === itemToRemove);
      setCartItems(updatedCartItems);
      
    }
    
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
  return (
    <>
      <div className="Menu-b_div-wrapper">
        <div className="Menu-b_div">
          {props.coffeeInfo.map((coffeeInfo, index) => (
            <div>
              <button
                onClick={() => openModal(coffeeInfo)}
                type="button"
                className="Menu-btnMenu_Body"
                id={index}
                key={index}
              >
                <img
                  src={`data:imge/jpeg;base64,${coffeeInfo.imageBytes}`}
                  className="img"
                  alt={coffeeInfo.name}
                />
              </button>
              <p className="Menu-btnMenu_menuName">{coffeeInfo.name}</p>

              {isModalOpen && selectedMenu && selectedMenu === coffeeInfo && (
                <div className="Menu-containerMenu">
                  <div>
                    <button className="Menu-btnMenu-close" onClick={closeModal}>
                      X
                    </button>
                  </div>
                  <img
                    src={`data:image/jpeg;base64,${coffeeInfo.imageBytes}`}
                    className="img"
                    alt={coffeeInfo.name}
                  />
                  <p className="Menu-mini_title">{coffeeInfo.name}</p>
                  <p>
                    <text className="Menu-text1">{coffeeInfo.content}</text>
                  </p>
                  <button
                    className="Menu-btnMenu-favorite"
                    onClick={() => addToFavorites(coffeeInfo)}
                  >
                    즐겨찾기
                  </button>
                  <button
                    className="Menu-btnMenu"
                    onClick={() => addToCart(coffeeInfo)}
                  >
                    장바구니
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        setCartItems={setCartItems}
      />
    </>
  );
}
