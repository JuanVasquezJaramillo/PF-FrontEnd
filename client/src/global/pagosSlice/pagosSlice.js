import axios from "axios";
import Swal from 'sweetalert2' //Importación de la libreria sweetalert2 que permite mostrar alertas bien GG's
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const pagosSlice = createSlice({
    name: "pagos",
    initialState: {
        pagos: [],
        aprobado: false,
        loading: false,
        error: null,
    },
    reducers: {
        aprobarPago: (state) => {
            state.aprobado = true;
        }
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
        builder.addCase(postCompraUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(postCompraUser.fulfilled, (state, action) => {
            state.pagos = action.payload;
            state.loading = false;
        })
        builder.addCase(postCompraUser.rejected, (state, action) => {
            state.loading = false;
            state.error = state.error.message;
        })
        builder.addCase(getComprasUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(getComprasUser.fulfilled, (state, action) => {
            state.pagos = action.payload;
            state.aprobado = true
            state.loading = false;
        })
        builder.addCase(getComprasUser.rejected, (state, action) => {
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

export const postCompraUser = createAsyncThunk("pagos/postCompraUser", async (payload) => {
    console.log("DESDE COMPRA USER", payload);
    try {
        const { data } = await axios.post("/bought", payload)
        return data;
    } catch (error) {
        console.log("Desde postCompraUser", error);
        Swal.fire({
            title: 'ERROR AL REGISTRAR COMPRA!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'entendido'
        })
    }
})

export const getComprasUser = createAsyncThunk("pagos/getCompraUser", async (payload) => {
    try {
        const { data } = await axios(`/checkout?idUser=${payload}`)
        return data;
    } catch (error) {
        console.log("Desde getCompraUser", error);
        Swal.fire({
            title: 'No se encontraron compras para este usuario',
            text: "Este usuario no registra compras",
            icon: "info",
            confirmButtonText: 'entendido'
        })
    }
})

export const {aprobarPago} = pagosSlice.actions;
export default pagosSlice.reducer