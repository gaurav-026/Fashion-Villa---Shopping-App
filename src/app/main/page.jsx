"use client"
import React, { useEffect, useState } from 'react'
import Spinner from '../pages/Spinner';
import Product from '../../components/Product';
import { useSelector } from 'react-redux';
const MainPage = () => {
  const {itemsList} = useSelector((state)=> state.items);
  const fetchedData = itemsList;
  console.log(fetchedData);

  return (
    <div className='lg:my-20 my-10'>

      {
          fetchedData.length > 0 ? (
            <div className='w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 gap-y-8'>
            {
              fetchedData.map((card, index) => {
                return (
                  <Product key={index} product={card}/>
                )
              })
            }
          </div>
          ) : (
            <div className='text-xl text-center font-semibold'>NO DATA FOUND</div>
          )
      }

    </div>
  )
}

export default MainPage
