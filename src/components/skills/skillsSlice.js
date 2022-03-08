import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: []
};


export const counterSlice = createSlice({
    name: 'skills',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        createSkills: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = [...state.value, action.payload];
        },
        updateSkills: (state, action) => {
            console.log(action);
            const { index, newValue } = action.payload;
            console.log(index);
            state.value.splice(index, 1, newValue);
            console.log(newValue);
            console.log(state.value);
        },
        deleteSkills: (state, index) => {
            state.value.splice(index, 1);
        }
    },

});

export const { createSkills, updateSkills, deleteSkills } = counterSlice.actions;

export default counterSlice.reducer;
