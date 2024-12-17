import React from "react";
import ProductList from "../componets/Forms/ProductList";
import { Link } from "react-router-dom";
import "./styles/dashboard.css";
import Card from "./Card";
import Sepet from "../componets/Forms/Sepet";
const Dashboard = ({ cardItems, item }) => {
  return (
    <div className="container">
      <div className="productList">
        <ProductList />
      </div>
      <div className="cardLink">
        <div className="sepet">
          <Sepet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
