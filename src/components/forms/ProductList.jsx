import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { addToCard } from "../../redux/cardSlice";
import "./styles/productlist.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const handleAddToCard = (product) => {
    const quantity = 1;
    dispatch(addToCard(product, quantity));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products", {
          method: "GET",
          headers: { "Content-Type": "application-json" },
        });
        if (!response.ok) {
          throw new Error("Bağlantı sağlanamadı");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.log("hata oluştu", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="productList-container">
      <h2>Merhaba, Ürün Listesi: </h2>

      <ul className="productList">
        {products.map((product) => (
          <li key={product.id}>
            {product.title} <br /> {product.price}
            <br />
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
