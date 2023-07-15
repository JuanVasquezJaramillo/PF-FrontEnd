import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const clasesSlice = createSlice({
    name: "clases",
    initialState: {
        list: [],
        listOriginal: [],
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
            state.list = state.list.filter(card => card.tags === action.payload)
        },
        resetList: (state) => {
            state.list = state.listOriginal
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllClass.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getAllClass.fulfilled, (state, action) => {
            state.list = action.payload;
            state.listOriginal = action.payload;
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

export const {filterTypeExercise, orderByPrice} = clasesSlice.actions
export default clasesSlice.reducer;
