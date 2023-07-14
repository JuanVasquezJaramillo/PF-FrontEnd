import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userIdSlice = createSlice({
  name: "userId",
  initialState: {
    listId: [],
  },
  reducers: {
    setUserId: (state, action) => {
      state.listId = action.payload;
    }
  },
});

export const { setUserId } = userIdSlice.actions;

export default userIdSlice.reducer;



export function getUserId(idPlan) {
    return async function () {  
        try {
        const response = (await axios.get(`http://localhost:5000/plan/${idPlan}`));
        console.log("KADOS",response)
        dispatch(setUserId(response));
            
        } catch (error) {
           
            alert(error.response.data.error)
        }
    }
}














