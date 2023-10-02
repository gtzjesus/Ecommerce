import { configureStore } from '@reduxjs/toolkit';
import bagReducer from './src/features/bag/bagSlice';

const store = configureStore({
  reducer: {
    bag: bagReducer,
  },
});

export default store;
