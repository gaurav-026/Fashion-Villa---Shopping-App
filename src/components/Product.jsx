"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from "../slices/CartSlice"
import { FaStar } from 'react-icons/fa'
import { BsHandbagFill } from "react-icons/bs";
import { MdDone } from 'react-icons/md'
import {toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.cart);

    //function to add item
    const addItem = (product) => {
        dispatch(add(product));
        console.log("Product add ho gya h");
        toast.success("Item added to cart");
    }

    return (
        //This will display all the products card on the UI
        <div className='bg-cardBackground rounded-md p-2 px-4 flex flex-col gap-2 h-[370px] w-[220px] hover:bg-hovercardBackground justify-between'>
            <div className='bg-white border-green w-full rounded-full h-[60%] flex items-center justify-center'>
                <Image
                    src={product.image}
                    alt='card'
                    width={80}
                    height={80}
                // layout="responsive"
                />
            </div>
            <h2 className='font-semibold text-sm'>{product.title.split(" ").slice(0, 8).join(" ")}</h2>

            <div className='flex gap-3 items-center'>
                <p className='font-semibold text-md rounded-md flex  gap-1 text-green'>{product.rating.rate} <FaStar size={20} /></p>
                <p className='font-medium text-sm'>({product.rating.count} Reviews)</p>
            </div>
            <div className='flex w-full gap-3' >
                <p className='font-medium text-md'>
                    ₹ {product.price}
                </p>
                <span className='text-md text-grey'>₹ <s>{(product.price + product.price * 0.20).toFixed(2)}</s></span>
            </div>
            {
                // Check if the item is present in the cart
                (() => {
                    const cartItem = items.find((item) => item.id === product.id);
                    return cartItem && cartItem.count > 0 ? (
                        <p className='py-2 px-4 bg-white flex gap-2 items-center justify-center mb-2 rounded-full text-blue border border-blue text-center'>Item Added <MdDone /></p>
                    ) : (
                        <button className='py-2 px-4 bg-blue mb-2 hover:bg-darkblue rounded-full flex gap-2 items-center justify-center text-white' onClick={() => addItem(product)}>Add Item <BsHandbagFill /></button>
                    );
                })()
            }

            

        </div>
    )
}

export default Product
