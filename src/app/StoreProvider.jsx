'use client'
import {React} from "react"
import { Provider } from "react-redux"
import {store} from "../Store"

//This is used to wrap the Whole client side application because in layout.js it is not working properly. I am using server wrapped in client 
const StoreProvider = ({children})=>{
    return <Provider store={store} >{children}</Provider>;
}
export default StoreProvider