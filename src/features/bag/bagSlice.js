import { createSlice } from '@reduxjs/toolkit';
// GET INFORMATION from local storage

// GRAB ITEMS
const items =
  localStorage.getItem('bagItems') != null
    ? JSON.parse(localStorage.getItem('bagItems'))
    : [];

// CREATE INITIAL STATE
const initialState = {
  bag: items,
};

// CREATE FUNCTION FOR UPDATING ITEM IN local storage (bagItems)
function updateBagLocalStorage(state) {
  localStorage.setItem(
    'bagItems',
    JSON.stringify(state.bag.map((item) => item))
  );
}

// CREATE BAG SLICE USING REDUX TOOLKIT
const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    addItem(state, action) {
      console.log('added');
      // payload = newItem
      state.bag.push(action.payload);
      // ADD item to local storage
      updateBagLocalStorage(state);
    },
    deleteItem(state, action) {
      // payload = id
      state.bag = state.bag.filter((item) => item.id !== action.payload);

      // PLACE OBJECT into storage, REMOVE item from local storage
      localStorage.setItem('bagItems', JSON.stringify(state.bag));
    },
    increaseItemQuantity(state, action) {
      // payload = id
      const item = state.bag.find((item) => item.id === action.payload);

      // update quantity
      item.quantity++;
      item.totalPrice = item.quantity * item.regularPrice;

      // update quantity for localStorage
      updateBagLocalStorage(state);
    },
    decreaseItemQuantity(state, action) {
      // payload = id
      const item = state.bag.find((item) => item.id === action.payload);

      // update quantity
      item.quantity--;
      item.totalPrice = item.quantity * item.regularPrice;

      // update quantity for localStorage
      updateBagLocalStorage(state);

      // AUTO-DELETE ITEM on quantity = 0
      if (item.quantity === 0) bagSlice.caseReducers.deleteItem(state, action);
    },
    clearBag(state) {
      state.bag = [];
      // REMOVE ALL items from local storage
      localStorage.removeItem('bagItems');
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

// HELPER FUNCTIONS
export const getBag = (state) => state.bag.bag;

export const getTotalBagQuantity = (state) =>
  state.bag.bag.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalBagPrice = (state) =>
  state.bag.bag.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.bag.bag.find((item) => item.id === id)?.quantity ?? 0;
