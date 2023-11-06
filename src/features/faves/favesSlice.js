import { createSlice } from '@reduxjs/toolkit';

// GRAB FAVES (using local storage)
const items =
  localStorage.getItem('favesItems') != null
    ? JSON.parse(localStorage.getItem('favesItems'))
    : [];

// CREATE INITIAL STATE
const initialState = {
  faves: items,
};

// CREATE FUNCTION FOR UPDATING ITEM IN local storage (faveItems)
function updateFavesLocalStorage(state) {
  localStorage.setItem(
    'favesItems',
    JSON.stringify(state.bag.map((item) => item))
  );
}

// CREATE FAVES SLICE (using Redux Toolkit)
const favesSlice = createSlice({
  name: 'faves',
  initialState,
  reducers: {
    addFaves(state, action) {
      // payload = newItem
      state.faves.push(action.payload);
      // ADD FAVE ITEM TO local storage
      updateFavesLocalStorage(state);
    },
  },
});

// EXPORT OUR REDUCERS
export const { addFaves } = favesSlice.actions;

export default favesSlice.reducer;

// HELPER FUNCTIONS
