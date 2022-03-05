import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [{ name: '', age: '' }]
};


export const counterSlice = createSlice({
    name: 'exp',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        createExp: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = action.payload;
        }
    },

});

export const { createExp } = counterSlice.actions;

export default counterSlice.reducer;
