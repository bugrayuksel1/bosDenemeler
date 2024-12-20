import "./styles/popUp.css";
import Button from "../ui/Button";
import assets from "../../assets";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../services/api";
import { Link } from "react-router-dom";

const PopUp = () => {
  const [products, setProducts] = useState([]);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDetail = () => {
    setIsPopUpOpen(true);
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setIsPopUpOpen(false);
    setSelectedProduct(null);
  };

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
        <img src={assets.icons.exit} onClick={handleCloseDetail(product)} />
      </div>
      <div className="description">
        {products.map((product) => (
          <div key={product.id}>{product.description}</div>
        ))}
      </div>

      <Button onClick={handleCloseDetail}>Anladım</Button>
    </div>
  );
};

export default PopUp;
