// store.js
import { configureStore } from '@reduxjs/toolkit';
import clientsReducer from './clientSlice';

const store = configureStore({
  reducer: {
    clients: clientsReducer,
  },
});

export default store;
