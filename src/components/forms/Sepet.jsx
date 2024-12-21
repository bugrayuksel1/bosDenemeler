import "./styles/sepet.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "../ui/Button";
import {
  addToCard,
  decrement,
  discount,
  removeFromCard,
} from "../../redux/cardSlice";
import { Link } from "react-router-dom";
import assets from "../../assets";
const Sepet = ({ cardItemss, toplamFiyat }) => {
  const dispatch = useDispatch();
  const cardItems = useSelector((state) => state.card.items);

  const handleAddToCard = (product) => {
    dispatch(addToCard(product));
    dispatch(discount());
  };

  const handleNegativeCard = (product) => {
    dispatch(decrement(product));
    dispatch(discount());
  };

  const handleRemoveFromCard = (product) => {
    dispatch(removeFromCard(product));
  };

  return (
    <div className="sepet-container">
      <div className="text">
        <h2>Sepet: {toplamFiyat} TL </h2>

        <h4 className="link">
          <img alt="shopCard" src={assets.icons.shopCard} />
          <Link to="/card">Sepete Git</Link>
        </h4>
      </div>

      <div className="sepet-products">
        {cardItems.map((item) => (
          <li key={item.id}>
            <p>
              {item.title} ---- {item.quantity} adet --->
              {item.price * item.quantity} TL <br />
              <Button onClick={() => handleNegativeCard(item)}>-1</Button>
              <Button onClick={() => handleAddToCard(item)}>+1</Button>
              <Button onClick={() => handleRemoveFromCard(item)}>sil</Button>
            </p>
          </li>
        ))}
      </div>
    </div>
  );
};
export default Sepet;
