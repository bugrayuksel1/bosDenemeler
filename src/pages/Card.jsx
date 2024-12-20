import Button from "../components/ui/Button";
import Sepet from "../components/forms/Sepet";
import { useSelector } from "react-redux";
import "./styles/card.css";

function Card() {
  const cardItems = useSelector((state) => state.card.items);

  const toplamFiyat = cardItems.reduce(
    (total, item) =>
      total +
      (item.discountPrice ? item.discountPrice : item.price) * item.quantity,
    0
  ); // bu fonksiyon önemli, alıştırma yapsan iyi olur.

  // Math.round(0.9)

  return (
    <div className="card-container">
      <div className="product">
        <Sepet cardItems={cardItems} toplamFiyat={toplamFiyat} />
      </div>

      <div className="price">
        <div className="totalPrice">
          <h2>Fiyat: {Math.round(toplamFiyat)}</h2>
          <Button>Alışverişi Tamamla</Button>
        </div>
        <div className="configuration">
          <h3>Toplam Fiyat:{toplamFiyat} </h3>
          <br />
          <h5>İndirim Toplamı: </h5>
          <br />
          <h5>Kazancın: </h5>
          <h5>Toplam Fiyat: </h5>
        </div>
      </div>
    </div>
  );
}

export default Card;
