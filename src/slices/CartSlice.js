'use client'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    //local storage m save kraunga
    itemCount:  0,
    items: [],
    totalPrice:  0,
}

//creating slice
export const cartReducer = createSlice({
    //We need to do initialize 3 things : name , intialstate and functions
    name: "cart",
    initialState: initialState,
    reducers: {
        //for adding items to cart
        add: (state, action) => {
            state.items.push({ ...action.payload, count: 1 })
            state.itemCount++;
            state.totalPrice += action.payload.price;
            //adding to local storage
        },
        //increment reducer for incrementing item count in the cart
        increment: (state, action) => {
            //first find itemIndex to increment the item count
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
            //if index found
            if (itemIndex != -1) {
                //increment count
                state.items[itemIndex].count += 1;
                //increment price
                state.totalPrice += parseFloat((state.items[itemIndex].price).toFixed(2));
                //increment total items
                state.itemCount += 1;
            }

        },
        //decrement reducer for decrementing item count in the cart
        decrement: (state, action) => {
            //first find itemIndex to decrement the item count
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
            //if index found
            if (itemIndex != -1) {
                //if item count is greater than 1 then decrement count
                if (state.items[itemIndex].count > 1) {
                    state.items[itemIndex].count -= 1;
                    state.totalPrice = parseFloat((state.totalPrice - state.items[itemIndex].price).toFixed(2));
                    state.itemCount -= 1;
                }
                //else remove the item from the cart
                else{
                    state.totalPrice = parseFloat((state.totalPrice - state.items[itemIndex].price).toFixed(2));
                    state.itemCount -= 1;
                    state.items.splice(itemIndex, 1); // Remove item from array
                }
            }
        },

        remove: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                state.totalPrice = parseFloat((state.totalPrice - state.items[index].count * state.items[index].price).toFixed(2));
                state.itemCount -= state.items[index].count;
                state.totalItems -= state.items[index].count;
        
                // Remove item from array
                state.items.splice(index, 1);
        
            }
        }


    }


})
export const { add, remove, increment, decrement } = cartReducer.actions;
export default cartReducer.reducer;
