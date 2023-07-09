import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import orderReducer from './orderSlice/orderSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    order: orderReducer
  }
});

export default store;