import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import orderReducer from './orderSlice/orderSlice';
import clasesReducer from "./clasesSlice/clasesSlice"
<<<<<<< HEAD
=======
import clasesFReducer from './filterSlice/filterSlice';
>>>>>>> 189c3927ec1995cc16077f650a4d8757b52d2298

const store = configureStore({
  reducer: {
    user: userReducer,
    order: orderReducer,
<<<<<<< HEAD
    clases: clasesReducer
    

=======
    clases: clasesReducer,
    clasesF: clasesFReducer,    
>>>>>>> 189c3927ec1995cc16077f650a4d8757b52d2298
  }
});

export default store;