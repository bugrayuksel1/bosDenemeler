import React from "react";

const Discount = ({ cart }) => {
  const discount =
    cart.reduce((total, item) => total + item.price * item.quantity, 0) >= 5
      ? 0.9
      : 1;

  return (
    <div className="discount">
      <p>İndirim: {discount === 1 ? "Yok" : "10%"} </p>
    </div>
  );
};

export default Discount;
