import React from "react";

const TotalPrice = ({ cart }) => {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="total-price">
      <h3>Toplam Fiyat: {totalPrice.toFixed(2)} TL</h3>
    </div>
  );
};

export default TotalPrice;
