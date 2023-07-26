import { createSlice } from "@reduxjs/toolkit";
import {login} from "./login"

const initialState = {
  user: {

    uid: "",
    firsName: "",
    lastName: "",
    email: "",
    age: ""
  },
  loading:false, 
  error: false
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      console.log(action.payload);
    }
  },
  extraReducers: (builder)=>{
    builder.addCase(login.pending, (state)=>{state.loading= true})
   .addCase(login.fulfilled, (state, action)=>{state.user = action.payload; state.loading= false})
   .addCase(login.rejected, (state, action)=>{state.loading= false; state.error = true; alert(action.payload)})
  }
});

export const { getUser } = userSlice.actions;

export default userSlice.reducer;