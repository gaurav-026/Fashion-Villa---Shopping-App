import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from "./slices/CartSlice";


//store creation using configureStore 
export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})

export default store;