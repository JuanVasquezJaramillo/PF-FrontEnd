import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit"

export  const login = createAsyncThunk("user/login", 
async (info) => {
    console.log("",info)
 try {
    const response = await axios.post("/login",info)
   
    const data = response.data
    
    return data
    
 } catch (error) {
    
    alert(error.response.data)
 }
})

