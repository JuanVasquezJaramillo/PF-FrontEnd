import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import clasesReducer from "./clasesSlice/clasesSlice";
import userIdReducer from "./userSlice/getUsersId";
import pagosReducer from "./pagosSlice/pagosSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    clases: clasesReducer,
    userId: userIdReducer,
    pagos: pagosReducer,
  },
});

export default store;
