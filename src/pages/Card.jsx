import { useDispatch, useSelector } from "react-redux";
import Button from "../componets/ui/Button";
import "./styles/card.css";
import { removeFromCard } from "../redux/cardSlice";
const Card = () => {
  const dispatch = useDispatch();
  const cardItems = useSelector((state) => state.card.items);

  const handleRemoveCard = (id) => {
    dispatch(removeFromCard(id));
  };

  const handleClearCard = () => {
    dispatch(clearCard());
  };

  return (
    <div className="container">
      <div className="products">
        {cardItems.map((item) => (
          <li key={item.id}>
            <p>
              {item.title} --- {item.quantity} adet ---> {item.price} TL
            </p>
            <Button onClick={() => handleRemoveCard(item.id)}>Çıkar</Button>
          </li>
        ))}
        <Button onClick={() => handleClearCard()}>Sepeti Temizle</Button>
      </div>
      <div className="price">
        <div className="totalPrice">
          Fiyat: xxxxx
          <Button>Alışverişi Tamamla</Button>
        </div>
        <div className="configuration">
          <h3>Toplam Fiyat: </h3>
          <br />
          <h5>İndirim Toplamı: </h5>
          <br />
          <h5>Kazancın: </h5>
          <h5>Toplam Fiyat: </h5>
        </div>
      </div>
    </div>
  );
};
export default Card;
