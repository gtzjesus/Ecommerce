import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //   cart: [],
  cart: [
    {
      id: 12,
      image:
        'https://vyxhuyruxuknaagfcaqg.supabase.co/storage/v1/object/public/item-images/tacos-alpastor.png',
      name: 'hello world',
      quantity: 5,
      regularPrice: 16,
      totalPrice: 55,
    },
  ],
};

const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      console.log(state.bag);

      console.log(action.payload);
      state.bag.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = id
      state.bag = state.bag.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload = id
      const item = state.bag.find((item) => item.id === action.payload);

      // update quantity
      item.quantity++;
      item.totalPrice = item.quantity * item.regularPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload = id
      const item = state.bag.find((item) => item.id === action.payload);

      // update quantity
      item.quantity--;
      item.totalPrice = item.quantity * item.regularPrice;
    },
    clearCart(state) {
      state.bag = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = bagSlice.actions;

export default bagSlice.reducer;
