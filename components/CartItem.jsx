"use client";

import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { CartContext } from '@/context/Cart.context';
import { IoMdClose } from "react-icons/io";

const CartItem = ({ item }) => {

  const { id, title, image, price } = item;

  const { removeFromCart } = useContext(CartContext);


  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        <Link href={`/detail/${id}`}>
          <Image 
            src={image}
            alt=" "
            className="max-w-[80px] rounded-lg"
            width={80}
            height={90}
          />
        </Link>
        <div className='w-full flex flex-col'>
          <div className='flex justify-between mb-2'>
            <Link 
              href={`/detail/${id}`}
              className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'
            >
              {title}
            </Link>
            <div
              onClick={ () => removeFromCart(id) }
              className='text-xl cursor-pointer'
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex justify-start items-center text-zinc-800"># {price}</div>
        </div>
      </div>
    </div>
  )
}

export default CartItem;