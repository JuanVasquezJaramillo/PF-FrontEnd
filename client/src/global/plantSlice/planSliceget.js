import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const planSlice = createSlice({
    name: "plan",
    initialState: {
      list: [],
    },
    reducers: {
      setPlanList: (state, action) => {
        state.list = action.payload;
      }
    },
  });

  export const { setPlanList } = planSlice.actions;

  export default planSlice.reducer;


export function getPlan() {
    return async function (dispatch) {  
        try {
        const response = await axios.get("http://localhost:5000/plans/");
            dispatch(setPlanList(response.data))
        } catch (error) {
           
            alert(error.response.data.error)
        }
    }
}