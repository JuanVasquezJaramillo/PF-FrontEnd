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
  reducers: {}
});

export default userSlice.reducer;