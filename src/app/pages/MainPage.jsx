"use client"
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import Product from '../../components/Product';
const MainPage = () => {

  // Adding a public api for products 
  const API_URL = "https://fakestoreapi.com/products";
  //Loading states to show loading
  const [loading, setLoading] = useState(false);
  //Using FetchedData state to store the api data
  const [fetchedData, setFetchedData] = useState([]);

  //function to fetch api
  const fetchAPIData = async () => {
    //set the loading true during fetching
    setLoading(true);
    try {
      //fetch the api
      const response = await fetch(API_URL);
      const result = await response.json();
      //store the api data in fetchedData state
      setFetchedData(result);

    }
    catch (error) {
      console.log("Error while fetching api");
      setFetchedData([]);
      setLoading(false);
    }
    //set the loading false when fetching is completed
    setLoading(false);

  }

  //for re-rendering on the UI we are using useEffect hook
  useEffect(() => {
    fetchAPIData();
  }, []);

  useEffect(() => {
    console.log(fetchedData)
  }, [fetchedData])

  return (
    <div className='lg:my-20 my-10'>

      {
        loading ? (<Spinner />) : (
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
        )
      }

    </div>
  )
}

export default MainPage
