import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemsList:[]
}

export const itemReducer = createSlice({
    name:"items",
    initialState,
    reducers:{
        addItems: (state, action)=>{
            state.itemsList = [...action.payload];
        }
    }
})

export const { addItems} = itemReducer.actions;
export default itemReducer.reducer;