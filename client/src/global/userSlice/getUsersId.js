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



export function getUserId( idUser) {
  // console.log( idUser)
    return async function (dispatch) {  
        try {
        const response = (await axios.get(`http://localhost:5000/user/${idUser}`)).data;
        
           dispatch(setUserId(response));
            
        } catch (error) {
           
            alert(error)
        }
    }
}














