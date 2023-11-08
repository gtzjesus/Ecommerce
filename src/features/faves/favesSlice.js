import { createSlice } from '@reduxjs/toolkit';
// GET INFORMATION from local storage

// GRAB ITEMS
const items =
  localStorage.getItem('favesItems') != null
    ? JSON.parse(localStorage.getItem('favesItems'))
    : [];

// CREATE INITIAL STATE
const initialState = {
  faves: items,
};

// CREATE FUNCTION FOR UPDATING FAVES IN local storage (favesItems)
function updateFavesLocalStorage(state) {
  localStorage.setItem(
    'favesItems',
    JSON.stringify(state.faves.map((item) => item))
  );
}

// CREATE faves SLICE USING REDUX TOOLKIT
const favesSlice = createSlice({
  name: 'faves',
  initialState,
  reducers: {
    addFaves(state, action) {
      // payload = newItem
      state.faves.push(action.payload);
      // ADD item to local storage
      updateFavesLocalStorage(state);
    },
    removeFaves(state, action) {
      // payload = id
      state.faves = state.faves.filter((item) => item.id !== action.payload);
      // PLACE OBJECT into storage, REMOVE item from local storage
      localStorage.setItem('favesItems', JSON.stringify(state.faves));
    },
  },
});

// EXPORT OUR REDUCERS (favesSlice.actions)
export const { addFaves, removeFaves } = favesSlice.actions;

export default favesSlice.reducer;

export const getFaves = () =>
  localStorage.getItem('favesItems') != null
    ? JSON.parse(localStorage.getItem('favesItems'))
    : [];
