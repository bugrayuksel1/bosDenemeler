import React from "react";
import ProductList from "../components/forms/ProductList";
import Sepet from "../components/forms/Sepet";
import "./styles/dashboard.css";
import { useSelector } from "react-redux";

function Dashboard() {
  const toplamFiyat = useSelector((state) =>
    state.card.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  );

  return (
    <div className="container">
      <div className="products">
        <ProductList />
      </div>
      <hr />
      <div className="card">
        <Sepet toplamFiyat={toplamFiyat} />
      </div>
    </div>
  );
}

export default Dashboard;
