import { createSlice } from '@reduxjs/toolkit';
// GET INFORMATION from local storage

// GRAB ITEMS
const items =
  localStorage.getItem('bagItem') != null
    ? JSON.parse(localStorage.getItem('bagItem'))
    : [];

// GRAB BAG TOTAL AMOUNT
const totalAmount =
  localStorage.getItem('totalAmount') != null
    ? JSON.parse(localStorage.getItem('totalPrice'))
    : 0;

// GRAB BAG TOTAL QUANTITIES
const totalQuantity =
  localStorage.getItem('totalQuantity') != null
    ? JSON.parse(localStorage.getItem('totalQuantity'))
    : 0;

// CREATE INITIAL STATE
const initialState = {
  bag: items,
  totalAmount: totalAmount,
  totalQuantity: totalQuantity,
};

// CREATE BAG SLICE USING REDUX TOOLKIT
const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.bag.push(action.payload);
      // ADD item to local storage
      localStorage.setItem(
        'bagItem',
        JSON.stringify(state.bag.map((item) => item))
      );
      // ADD totalPrice to local storage
      localStorage.setItem(
        'totalAmount',
        JSON.stringify(state.bag.map((item) => item.regularPrice))
      );
      // ADD quantity to local storage
      localStorage.setItem(
        'totalQuantity',
        JSON.stringify(state.bag.map((item) => item.quantity))
      );
    },
    deleteItem(state, action) {
      // payload = id
      state.bag = state.bag.filter((item) => item.id !== action.payload);
      // REMOVE item from local storage
      localStorage.removeItem('bagItem');
      // REMOVE quantity from local storage
      // localStorage.removeItem('totalQuantity');
    },
    increaseItemQuantity(state, action) {
      // payload = id
      const item = state.bag.find((item) => item.id === action.payload);

      // update quantity
      item.quantity++;
      item.totalPrice = item.quantity * item.regularPrice;

      // INCREASE quantity to local storage
      localStorage.setItem(
        'totalQuantity',
        JSON.stringify(state.bag.map((item) => item.quantity))
      );
    },
    decreaseItemQuantity(state, action) {
      // payload = id
      const item = state.bag.find((item) => item.id === action.payload);

      // update quantity
      item.quantity--;
      item.totalPrice = item.quantity * item.regularPrice;

      // AUTO-DELETE ITEM on quantity = 0
      if (item.quantity === 0) bagSlice.caseReducers.deleteItem(state, action);

      // DECREASED quantity on local storage
      localStorage.setItem(
        'totalQuantity',
        JSON.stringify(state.bag.map((item) => item.quantity - 1))
      );
    },
    clearBag(state) {
      state.bag = [];
      // REMOVE ALL items from local storage
      localStorage.removeItem('bagItem');
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

// FUNCTIONS USED ACROSS THE BAG COMPONENT
export const getBag = (state) => state.bag.bag;

export const getTotalBagQuantity = (state) =>
  state.bag.bag.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalBagPrice = (state) =>
  state.bag.bag.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.bag.bag.find((item) => item.id === id)?.quantity ?? 0;
