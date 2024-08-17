import Link from 'next/link'
import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
'use-client'
const Header = () => {
  return (
    <div className='bg-blue w-full h-[10vh] flex justify-between items-center lg:px-20 md:px-20 px-10'>
      <Link href={"/"}><h1 className='text-white text-semibold text-2xl'>Fashion Villa</h1></Link>
      <Link href={"/cart"}>
        <button className='flex gap-2 items-center text-medium text-white'><FaShoppingCart size={20}/> My Cart</button>
      </Link>
    </div>
  )
}

export default Header
