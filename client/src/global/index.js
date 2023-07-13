import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import clasesReducer from "./clasesSlice/clasesSlice"


const store = configureStore({
  reducer: {
    user: userReducer,
    clases: clasesReducer, 
     
  }
});

export default store;