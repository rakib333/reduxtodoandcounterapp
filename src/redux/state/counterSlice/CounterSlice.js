import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: 'counter_app',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value = state.value + 1
        },
        decrement: (state) => {
            state.value = state.value - 1
        },
        reset: (state) => {
            state.value = 0
        },
        DivideBy2: (state) => {
            state.value = state.value / 2
        },
        // use of action and payload
        multiplyBy2: (state, action) => {
            state.value = state.value * action.payload;
        },
        // use of action and payload
        setCustom: (state, action) => {
            state.value =action.payload;
        },
    }
});

export const { increment, decrement, reset, DivideBy2, multiplyBy2, setCustom } = counterSlice.actions;
export default counterSlice.reducer;