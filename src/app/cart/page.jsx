'use client'
import { decrement, increment, remove } from '@/slices/CartSlice';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoAddCircleSharp } from "react-icons/io5"
import { BiSolidMinusCircle } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { FaStar } from 'react-icons/fa';
import {toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  //destructure the variables from the state
  const { itemCount, items, count, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  //function for increment count of item
  const handleIncrement = (id) => {
    dispatch(increment({ id }));


  }
  //function for decrement count of item
  const handleDecrement = (id) => {
    dispatch(decrement({ id }));
  }
  //function to delete item from the cart
  const handleDelete = (id) => {
    try {
      dispatch(remove(id));
      console.log("Item Deleted from Cart");
      toast.success("Item deleted from cart")

    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log(items)
  }, [items]);

  return (
    //this will return the Cart where all the added items will be visible

    <div className='my-10 flex flex-col gap-10 lg:mx-10 md:mx-8 mx-5'>
      <h1 className='text-3xl font-semibold'>Your cart</h1>

      <div className='flex lg:flex-row md:flex-row flex-col-reverse gap-8 justify-between'>

        <div className='w-full flex flex-col gap-5'>
          {items.length > 0 ? (
            items.map((product, index) => (
              <div key={index} className='bg-cardBackground hover:bg-white hover:border border-blue border-sm lg:p-5 md:p-4 p-4 rounded-md flex flex-col lg:flex-row md:flex-row lg:gap-5 items-center lg:items-start md:items-start  gap-3'>
                {/* Image  */}
                <div className='bg-white w-fit h-full flex items-center justify-center p-8 rounded-lg '>
                  <Image
                    src={product.image}
                    alt='card'
                    width={80}
                    height={80}
                  />
                </div>
                {/* Item Details  */}
                <div className='flex flex-col lg:gap-3 gap-1 '>
                  <p className='font-medium'>{product.title}</p>
                  <p className='text-sm '>{product.description.split(" ").slice(0, 20).join(" ") + " ...read more"}</p>
                  <div className='flex w-full gap-3' >
                    <p className='font-medium text-md'>
                      ₹ {product.price.toFixed(2)}
                    </p>
                    <span className='text-md text-grey'>₹ <s>{(product.price + product.price * 0.20).toFixed(2)}</s></span><p className='font-semibold text-md rounded-md flex  gap-1 text-green'>{product.rating.rate} <FaStar size={20}/></p>
                  </div>
                  {/* Increment Decrement Buttons  */}
                  <div className='flex gap-2 items-center justify-between'>

                    <div className='flex gap-2 items-center'>
                    <button onClick={() => handleDecrement(product.id)}><BiSolidMinusCircle size={30} style={{ color: "blue" }} /></button>
                    <p className='text-xl font-semibold'>{product.count}</p>
                    <button onClick={() => handleIncrement(product.id)}><IoAddCircleSharp size={30} style={{ color: "blue" }} /></button>
                    </div>
                    <button onClick={() => handleDelete(product.id)}><MdDelete size={30} style={{padding:'4px', borderRadius:"100px", color:"red", background: "#F8F8F8"}}/></button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className='text-center font-medium my-20'>No items in the cart.</p>
          )}

        </div>
        <div className='border border-blue h-fit flex flex-col p-5 lg:w-[300px] md:w-[300px] w-full gap-5 rounded-md'>
          <p className='text-2xl font-medium'>Total: ₹{totalPrice.toFixed(2)}</p>
          <p className='text-xl font-medium'>Total Items: {itemCount}</p>
          <button className='py-2 px-4 bg-blue mb-2 hover:bg-darkblue rounded-xl w-full text-white'>Checkout</button>
        </div>

      </div>


    </div>
  )
}

export default Cart

