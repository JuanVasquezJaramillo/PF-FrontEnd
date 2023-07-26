import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("user/login", async (info) => {
  console.log("1111111111111111111111111111111111111111", info);
  try {
    const response = await axios.post("/login", info);

    const data = response.data;
    console.log("44444444444444444444444444444444444444", data);
    return data;
  } catch (error) {
    alert(error.response.data);
  }
});
