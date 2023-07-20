import React from "react";

export default function Cart({ cartItems, removeFromCart, setCartItems }) {
  const handleRemove = () => {
    setCartItems([]);
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

  return (
    <div className="Menu-cart">
      <h2 className="Menu-cartText1">장바구니</h2>

      <ul className="Menu-cart-container">
        {cartItems.map((item, index) => (
          <li key={item.id} className="Menu-cart-container-MenuList">
            <div className="Menu-cart-container-MenuList-itemName">
              {item.name}
            </div>
            <div className="Menu-plusBtn-container">
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
          </li>
        ))}
      </ul>
      <div className="Menu-cart-Menu-close-container">
        <button className="Menu-cart-Menu-close" onClick={handleRemove}>
          Reset the menu
        </button>
      </div>
    </div>
  );
}
