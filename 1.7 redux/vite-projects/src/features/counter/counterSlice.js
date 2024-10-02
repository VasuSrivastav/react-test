import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counter',
    initialState :{value :0},
    reducers:{
        reset:state=>{state.value=0},
        increment:state=>{state.value+=1},
        decrement:state=>{state.value-=1},
        increAmount:(state,action)=>{state.value+=Number(action.payload)},

    }
})
export const {reset,increment, decrement,increAmount  }  =counterSlice.actions
export default counterSlice.reducer