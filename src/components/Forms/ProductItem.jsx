import React from "react";

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>{product.price} TL</p>
      <button onClick={() => onAddToCart(product)}>Sepete Ekle</button>
    </div>
  );
};

export default ProductItem;
