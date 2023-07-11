import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  clasesF: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterTypeExercise: (state, action) => {
      const filtrarClases = state.clasesF;
      const clasesFiltradas =
        action.payload === 'filterPorDefect'
          ? filtrarClases
          : filtrarClases.filter((clase) => clase.etiquetas === action.payload);
      state.clasesF = clasesFiltradas;
    },
  },
});

export const { filterTypeExercise } = filterSlice.actions;

export default filterSlice.reducer;
