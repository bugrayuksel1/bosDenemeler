import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Select from "../ui/Select";
import { addToCard } from "../../redux/cardSlice";
import { useDispatch } from "react-redux";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const [selectedQuantity, setSelectedQuantity] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.log("hata oluştu", error);
      }
    };
    fetchData();
  }, []);

  // const handleSelectedQuantity = (productId, piece) => {
  //   setSelectedQuantity({
  //     ...selectedQuantity,
  //     [productId]: piece,
  //   });
  // };

  const handleAddToCard = (product) => {
    const quantity = selectedQuantity[product.id] || 1;
    dispatch(addToCard(product, quantity));
    console.log(product.id);
  };

  return (
    <div>
      <h2>Merhaba, ürün listesi :</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} ----- {product.price}
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
