import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import clasesReducer from "./clasesSlice/clasesSlice";
import userIdReducer from "./userSlice/getUsersId";

const store = configureStore({
  reducer: {
    user: userReducer,
    clases: clasesReducer,
    userId: userIdReducer,
  },
});

export default store;
