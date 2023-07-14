import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access: false,
  user: {
    id: "",
    firsName: "",
    lastName: "",
    email: "",
    age: ""
  },
  loading: false,
  error: null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signin: (state) => {
      state.access = true
    },
    signout: (state) => {
      state.access = false
    }
  }
});

export const { signin, signout } = userSlice.actions;

export default userSlice.reducer;