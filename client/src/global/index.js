import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import clasesReducer from "./clasesSlice/clasesSlice"
import planReducer from "./plantSlice/planSliceget"

const store = configureStore({
  reducer: {
    user: userReducer,
    clases: clasesReducer, 
     plan: planReducer, 
  }
});

export default store;