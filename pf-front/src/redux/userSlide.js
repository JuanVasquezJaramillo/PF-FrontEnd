import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    access: false,
    id: 0,
    email: '',
    password: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetUser : (state) => {
            state.access = false,
            state.id = 0,
            state.email = '',
            state.password = ''
        }
    }
});

export const {resetUser} = userSlice.actions;
export default userSlice.reducer;