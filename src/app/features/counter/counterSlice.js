import { createSlice } from "@reduxjs/toolkit";

const initialState = {value: 0}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) =>  {
            state.value -= 1
        },
        incrementByValue: (state, actions) =>  {
            console.log(actions.payload)
            state.value += Number(actions.payload)
        }
    }
})

export default counterSlice.reducer
export const {
    increment,
    decrement,
    incrementByValue
} = counterSlice.actions