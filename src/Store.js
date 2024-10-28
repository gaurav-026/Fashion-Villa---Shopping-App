import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from "./slices/CartSlice";
import  itemReducer  from "./slices/ItemSlice";


//store creation using configureStore 
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        items: itemReducer,
    }
})

export default store;