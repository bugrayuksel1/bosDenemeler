import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
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
  },
});

export const { addToCard, decrement, removeFromCard } = cardSlice.actions;
export default cardSlice.reducer;
