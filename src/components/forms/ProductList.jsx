import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { addToCard } from "../../redux/cardSlice";
import "./styles/productlist.css";
import assets from "../../assets";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../services/api";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://dummyjson.com/products", {
  //         method: "GET",
  //         headers: { "Content-Type": "application-json" },
  //       });
  //       if (!response.ok) {
  //         throw new Error("Bağlantı sağlanamadı");
  //       }
  //       const data = await response.json();
  //       setProducts(data.products);
  //     } catch (error) {
  //       console.log("hata oluştu", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  //ayrı bir klasöre al fetch'i
  //.env dosyası oluşturup veriyi ordan çek.
  //then-catch kullan fetch'de
  return (
    <div className="productList-container">
      <h2>Merhaba, Ürün Listesi: </h2>

      <ul className="productList">
        {products.map((product) => (
          <li key={product.id}>
            {product.title} <br /> {product.price}
            <br />
            <div className="info">
              <Link>
                <img src={assets.icons.info} alt="info" />
              </Link>
            </div>
            <Button type="button" onClick={() => handleAddToCard(product)}>
              Sepete Ekle
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductList;
