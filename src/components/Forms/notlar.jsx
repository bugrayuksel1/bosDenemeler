import React from "react";

function notlar() {
  return (
    <div>
      <select
        defaultValue="1"
        onChange={
          (e) => (item.selectedQuantity = e.target.value) // Seçilen adet
        }
      >
        {[...Array(10)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <button onClick={() => handleAddToCart(item, item.selectedQuantity || 1)}>
        Sepete Ekle
      </button>
    </div>
  );
}

export default notlar;
