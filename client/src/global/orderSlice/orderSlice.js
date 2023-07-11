import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    precios: []
    ,
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        orderByPrice: (state, action) => {
            const ordenarPrecios = state.precios;
            const preciosFiltrados = 
            action.payload === 'Menor'
            ? ordenarPrecios.sort( (a, b) => {
                if (a.precio > b.precio){ //al tener la info, poner: a.precio > b.precio
                    return 1;
                }
                if (b.precio > a.precio){ //al tener la info, poner: b.precio > a.precio
                    return -1;
                }
                return 0;
            })
            : ordenarPrecios.sort((a, b) => {
                if (a.precio > b.precio){ //al tener la info, poner: a.precio > b.precio
                    return -1;
                }
                if (b.precio > a.precio){ //al tener la info, poner:  b.precio > a.precio
                    return 1;
                }
                return 0;
            });
            state.precios = preciosFiltrados;
        }
    },
    });

export const { orderByPrice } = orderSlice.actions;

export default orderSlice.reducer;