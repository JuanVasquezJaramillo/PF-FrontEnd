import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const clasesSlice = createSlice({
    name: "clases",
    initialState: {
        list: [],
        listOriginal: [],
        listProducts: [],
        loading: false,
        error: null,
    },
    reducers: {
        orderByPrice: (state, action) => {
            state.list = state.list.sort((a, b) => {
                if (action.payload === "Menor") return a.price - b.price;
                if (action.payload === "Mayor") return b.price - a.price;
                return 0;
            })
        },
        filterTypeExercise: (state, action) => {
            //state.list = state.list.filter((card) => card.tags.includes(action.payload))
            if (state.list.length !== 0) {
                state.list = state.list.filter((card) => card.tags.toLowerCase().includes(action.payload.toLowerCase()))
            } else {
                state.list = state.listOriginal.filter((card) => card.tags.toLowerCase().includes(action.payload.toLowerCase()))
            }
        },
        filterPrice: (state, action) => {
            if (state.list.length !== 0) {
                state.list = state.list.filter((card) => card.price >= action.payload.min && card.price <= action.payload.max);
            } else {
                state.list = state.listOriginal.filter((card) => card.price >= action.payload.min && card.price <= action.payload.max);
            }
        },
        resetList: (state) => {
            state.list = state.listOriginal
        },
        addProduct: (state, action) => {
            state.listProducts.push(action.payload)
        },
        deleteProducts: (state) => {
            state.listProducts = []
        },
        deleteItem: (state, action) => {
            //    state.listProducts = state.listProducts.filter((plan) => plan.idPlan !== action.payload)
            const index = state.listProducts.findIndex((plan) => plan.idPlan === action.payload);
            if (index !== -1) {
                state.listProducts.splice(index, 1);
            }
        }
},
    extraReducers: (builder) => {
        builder.addCase(getAllClass.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(getAllClass.fulfilled, (state, action) => {
                if (Array.isArray(action.payload)) {
                    state.list = action.payload;
                    state.listOriginal = action.payload;
                } else {
                    state.list = [];
                    state.listOriginal = [];
                }
                state.loading = false;
            })
            .addCase(getAllClass.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
        builder.addCase(getByNameTag.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(getByNameTag.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
            })
            .addCase(getByNameTag.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
        builder.addCase(getById.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(getById.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
            })
            .addCase(getById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
    }
})

export const getAllClass = createAsyncThunk("clases/getAllClass", async () => {
    const { data } = await axios("/plans");
    return data;
})

export const getByNameTag = createAsyncThunk("clases/getByNameTag", async (param) => {
    const { data } = await axios(`/search?search=${param}`);
    return data;
})

export const getById = createAsyncThunk("clases/getById", async (param) => {
    const { data } = await axios(`/plan/${param}`)
    return data;
})

export const { filterTypeExercise, filterPrice, orderByPrice, resetList, addProduct, deleteProducts, deleteItem } = clasesSlice.actions
export default clasesSlice.reducer;
