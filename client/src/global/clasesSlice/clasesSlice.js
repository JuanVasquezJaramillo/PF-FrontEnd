import { createSlice } from "@reduxjs/toolkit";
export const  clasesSlice = createSlice({
    name: "clases",
    initialState:{
        list:[],  
    },
    reducers:{
        setClaseslist:(state, action)=>{
            state.list = action.payload     
        }
    }   
})

export default clasesSlice.reducer;
export const {setClaseslist}= clasesSlice.actions


import axios from "axios";
export function getAllClases(){
    return async function (dispatch){
        try {
            const response = (await axios.get("http://localhost:3001/videos/getvideo")).data
          
            dispatch(setClaseslist(response))

        } catch (error) {
            alert("Sucedio un error al requerir las clases")
        }
    }
}