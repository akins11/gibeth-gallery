"use client";

import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { BsPlus, BsEyeFill } from "react-icons/bs";

import { CartContext } from '@/context/Cart.context';



const Product = ({ product }) => {
  const {id, image, category, title, price} = product;

  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <div className='border border-[#e4e4e4] hover:border-[#BBBBBB] rounded-lg h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center"> 
            <Image 
              src={image} 
              alt="" 
              className="max-h-[160px] group-hover:scale-110 transition duration-300" 
              width={120} 
              height={190}
            />
          </div>
        </div>
        <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap=y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button onClick={ () => addToCart(product, id) }>
            <div className="flex justify-center items-center text-white w-10 h-10 bg-[#FCA311] drop-shadow-md rounded-lg mb-1">
              <BsPlus className="text-3xl"/>
            </div>
          </button>
          <Link 
            href={`/detail/${id}`} 
            className="w-10 h-10 bg-[#E5E5E5] flex justify-center items-center text-primary drop-shadow-xl rounded-lg">
            <BsEyeFill />
          </Link>
        </div>       
      </div>
      <div>
        <div className='flex justify-start items-center gap-x-3'>
          <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
          <div className='font-bold text-[#E5E5E5] pb-2'> | </div>
          <Link href={`/detail/${id}`}>
            <h2 className="font-semibold mb-1">{title}</h2>
          </Link>
        </div>
        <div className="font-semibold"># {price}</div>
      </div>
    </div>
  )
}

export default Product;