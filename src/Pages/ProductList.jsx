import React from "react";
import "./styles/productList.css";
import Fetch from "../components/Forms/Fetch";

function ProductList() {
  return (
    <div className="container">
      <div className="fetch">
        <Fetch />
      </div>
    </div>
  );
}

export default ProductList;
