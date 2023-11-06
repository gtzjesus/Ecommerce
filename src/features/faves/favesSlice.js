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

// CREATE FUNCTION FOR UPDATING ITEM IN local storage (favesItems)
function updateFavesLocalStorage(state) {
  localStorage.setItem(
    'favesItems',
    JSON.stringify(state.faves.map((item) => item))
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
      // ADD item to local storage
      updateFavesLocalStorage(state);
    },
  },
});

// EXPORT OUR REDUCERS
export const { addFaves } = favesSlice.actions;

export default favesSlice.reducer;

// HELPER FUNCTIONS
