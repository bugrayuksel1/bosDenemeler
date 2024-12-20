import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../services/api";

export const cardSlice = createSlice({
  //sepeti for'la dön. if'le kontrol et. discount function öyle yaz.
  //indiirim ve eksiltmeyi aynı fonksiyonda yaz. ürünsayısı 5 ve üzerinde mi??
  name: "card",
  initialState: {
    items: [],
  },
  reducers: {
    addToCard: (state, action) => {
      const product = action.payload;

      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    decrement: (state, action) => {
      const product = action.payload;

      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter((item) => item.id !== product.id);
        }
      }
    },

    removeFromCard: (state, action) => {
      const product = action.payload;

      state.items = state.items.filter((item) => item.id !== product.id);
    },

    discount: (state) => {
      state.items.forEach((item) => {
        if (item.quantity >= 5) {
          item.discountPrice = item.price * 0.9;
        } else {
          item.discountPrice = item.price;
        }
      });
    },
  },
});

export const { addToCard, decrement, removeFromCard, discount } =
  cardSlice.actions;
export default cardSlice.reducer;
