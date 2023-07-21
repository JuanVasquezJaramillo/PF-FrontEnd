import axios from "axios";
import Swal from 'sweetalert2' //Importación de la libreria sweetalert2 que permite mostrar alertas bien GG's
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const pagosSlice = createSlice({
    name: "pagos",
    initialState: {
        pagos: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(postCheckoutId.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(postCheckoutId.fulfilled, (state, action) => {
            state.pagos = action.payload;
            state.loading = false;
        })
        builder.addCase(postCheckoutId.rejected, (state, action) => {
            state.loading = false;
            state.error = state.error.message;
        })
    }
})

export const postCheckoutId = createAsyncThunk("pagos/postCheckoutId", async (payload) => {
    try {
        const { data } = await axios.post("/checkout", payload)
        Swal.fire({
            title: 'COMPRADO!',
            text: 'Su compra fue éxitosa',
            icon: 'success',
            confirmButtonText: 'entendido'
        })
        return data;
    } catch (error) {
        console.log("Desde pagosSlice", error);
        Swal.fire({
            title: 'ERROR AL COMPRAR!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'entendido'
          })
    }

})