import React from "react";

export default function Cart({ cartItems, removeFromCart }) {
  const handleRemove = (item) => {
    removeFromCart(item);
  };

  return (
    <div className="Menu-cart">
      <h2 className="Menu-cartText1">장바구니</h2>

      <ul className="Menu-cart-container">
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button
              className="Menu-cart-Menu-close"
              onClick={() => handleRemove(item)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
