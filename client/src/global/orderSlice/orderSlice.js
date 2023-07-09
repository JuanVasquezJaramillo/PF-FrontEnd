import { createAction, createReducer } from "@reduxjs/toolkit";

export const orderPrecios = createAction('precios/orderPrecios');

const initialState = {
    precios: []
    ,
};

const orderReducer = createReducer(initialState, (builder) => {
    builder.addCase(orderPrecios, (state, action) => {
        const ordenarPrecios = state.precios;
        const preciosFiltrados = 
        action.payload === 'TO-DO (por hacer)'
        ? ordenarPrecios.sort( (a, b) => {
            if (a > b){ //al tener la info, poner: a.precio > b.precio
                return 1;
            }
            if (b > a){ //al tener la info, poner: b.precio > a.precio
                return -1;
            }
            return 0;
        })
        : ordenarPrecios.sort((a, b) => {
            if (a > b){ //al tener la info, poner: a.precio > b.precio
                return -1;
            }
            if (b > a){ //al tener la info, poner:  b.precio > a.precio
                return 1;
            }
            return 0;
        });
        state.precios = ordenarPrecios;
    });
});



export default orderReducer;