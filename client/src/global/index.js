import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import orderReducer from './orderSlice/orderSlice';
import clasesReducer from "./clasesSlice/clasesSlice"
import clasesFReducer from './filterSlice/filterSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    order: orderReducer,
    clases: clasesReducer,
    clasesF: clasesFReducer,    
  }
});

export default store;