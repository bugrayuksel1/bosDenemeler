import React, { useState } from "react";
import CartItem from "../components/Forms/CardItem";
import Discount from "../components/Forms/Discount";
import TotalPrice from "../components/Forms/TotalPrice";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="cart">
      <h2>Sepet</h2>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
      <Discount cart={cart} />
      <TotalPrice cart={cart} />
      <button onClick={clearCart}>Sepeti Temizle</button>
    </div>
  );
};

export default Cart;
