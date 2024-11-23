'use client'
import Link from 'next/link'
import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
const Header = () => {
  return (
    <div className='bg-blue w-full h-[10vh] flex justify-between items-center lg:px-10 md:px-10 px-8'>
      <div className='flex gap-4 items-center'>
      <Link href={"/"}><h1 className='text-white text-semibold lg:text-2xl md:text-2xl text-xl'><b>Fashion Villa</b></h1></Link>
      <div className='flex lg:gap-4 md:gap-4 gap-2'>
      <Link href={"/main"}>
        <button className='flex gap-2 items-center lg:text-xl md:text-xl text-sm text-white'>Products</button>
      </Link>
      {/* <Link href={"/contact"}>
        <button className='flex gap-2 items-center lg:text-xl md:text-xl text-sm text-white'>Contact</button>
      </Link> */}
      </div>
      </div>
      <Link href={"/cart"}>
        <button className='flex gap-2 items-center lg:text-xl md:text-xl text-sm text-white'><FaShoppingCart size={20}/> My Cart</button>
      </Link>
    </div>
  )
}

export default Header