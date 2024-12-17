import { useDispatch, useSelector } from "react-redux";
import Button from "../ui/Button";
import {
  addToCard,
  decrement,
  increment,
  removeFromCard,
} from "../../redux/cardSlice";
const Sepet = () => {
  const dispatch = useDispatch();
  const cardItems = useSelector((state) => state.card.items);

  const handleRemoveCard = (id) => {
    dispatch(removeFromCard(id));
  };

  const handleClearCard = () => {
    dispatch(clearCard());
  };

  const handleAddToCard = (product) => {
    dispatch(addToCard(product));
  };

  const handleDecrement = (product) => {
    dispatch(decrement(product));
  };

  return (
    <div>
      <div className="products">
        {cardItems.map((item) => (
          <li key={item.id}>
            <p>
              {item.title} --- {item.quantity} adet ---> {item.price} TL
            </p>
            <Button onClick={() => handleDecrement(item)}>-1</Button>
            <Button onClick={() => handleAddToCard(item)}>+1</Button>
            <Button onClick={() => handleRemoveCard(item.id)}>Sil</Button>
          </li>
        ))}
        <Button onClick={() => handleClearCard()}>Sepeti Temizle</Button>
      </div>
    </div>
  );
};
export default Sepet;
