"use client";
import Image from "next/image";
import Header from "./pages/Header";
import { Provider } from "react-redux";
import MainPage from "./pages/MainPage";
import Link from "next/link";
import Cart from "./cart/page";
import {store} from "../Store"


export default function Home() {
  return (


     <Provider store={store}>
      {/* <Header/> */}
      <MainPage/>
     </Provider>
      
    
  );
}

