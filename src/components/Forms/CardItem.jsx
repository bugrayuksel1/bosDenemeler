import React from "react";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>
        {item.price} TL x {item.quantity}
      </p>
      <button onClick={() => removeFromCart(item.id)}>Sil</button>
    </div>
  );
};

export default CartItem;
