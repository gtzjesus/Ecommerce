import { createSlice } from '@reduxjs/toolkit';
import { useLocalStorage } from '../../services/useLocalStorage';

// CREATE INITIAL STATE
const initialState = {
  bag: [],
};
// CREATE BAG SLICE USING REDUX TOOLKIT
const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
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

      if (item.quantity === 0) bagSlice.caseReducers.deleteItem(state, action);
    },
    clearBag(state) {
      state.bag = [];
    },
  },
});

// EXPORT OUR REDUCERS (bagSlice.actions)
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearBag,
} = bagSlice.actions;

export default bagSlice.reducer;

export const getBag = (state) => state.bag.bag;

export const getTotalBagQuantity = (state) =>
  state.bag.bag.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalBagPrice = (state) =>
  state.bag.bag.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.bag.bag.find((item) => item.id === id)?.quantity ?? 0;
