import { configureStore } from '@reduxjs/toolkit';
import bagReducer from './src/features/bag/bagSlice';
import favesReducer from './src/features/faves/favesSlice';

const store = configureStore({
  reducer: {
    bag: bagReducer,
    faves: favesReducer,
  },
});

export default store;
