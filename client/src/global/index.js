import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import orderReducer from './orderSlice/orderSlice';
import clasesReducer from "./clasesSlice/clasesSlice"

const store = configureStore({
  reducer: {
    user: userReducer,
    order: orderReducer,
    clases: clasesReducer
    

  }
});

export default store;