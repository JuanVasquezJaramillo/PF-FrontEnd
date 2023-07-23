import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    uid: "",
    firsName: "",
    lastName: "",
    email: "",
    age: ""
  }
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      console.log(action.payload);
    }
  }
});

export const { getUser } = userSlice.actions;

export default userSlice.reducer;