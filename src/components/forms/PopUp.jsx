import "./styles/popUp.css";
import Button from "../ui/Button";
import assets from "../../assets";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../services/api";
import { Link } from "react-router-dom";

const PopUp = ({ product, handleCloseDetail }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getDescriptions = async () => {
      const data = await fetchProducts();
      if (data) {
        setProducts(data.products);
      }
    };
    getDescriptions();
  }, []);

  return (
    <div className="popUp-container">
      <div className="exit">
        <img src={assets.icons.exit} onClick={handleCloseDetail} />
      </div>
      <div className="description">
        <h4>
          {product.title} <br /> {product.description}
        </h4>
      </div>

      <Button onClick={handleCloseDetail}>Anladım</Button>
    </div>
  );
};
export default PopUp;
