import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { addToCard } from "../../redux/cardSlice";
import "./styles/productlist.css";
import assets from "../../assets";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../services/api";
import PopUp from "./PopUp";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDetail = () => {
    setIsPopUpOpen(true);
    setSelectedProduct();
  };

  const handleCloseDetail = () => {
    setIsPopUpOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCard = (product) => {
    const quantity = 1;
    dispatch(addToCard(product, quantity));
  };

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      if (data) {
        setProducts(data.products);
      }
    };
    getProducts();
    console.log("products", products);
  }, []);

  //ayrı bir klasöre al fetch'i
  //.env dosyası oluşturup veriyi ordan çek.
  //then-catch kullan fetch'de

  // Link to= "#",  sayfa yenilenmeden mevcut sayfayla aynı yerde olduğunu belirtir

  return (
    <div className="productList-container">
      <h2>Merhaba, Ürün Listesi: </h2>

      <ul className="productList">
        {products.map((product) => (
          <li key={product.id}>
            {product.title} <br /> {product.price}
            <br />
            <div className="info">
              <img
                src={assets.icons.info}
                alt="info"
                onClick={handleDetail}
              ></img>
              <Link to="#" onClick={selectedProduct?.description}>
                Detay
              </Link>
            </div>
            <Button type="button" onClick={() => handleAddToCard(product)}>
              Sepete Ekle
            </Button>
          </li>
        ))}
      </ul>
      {isPopUpOpen && <PopUp handleCloseDetail={handleCloseDetail} />}
    </div>
  );
};
export default ProductList;
