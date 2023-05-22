"use client";

import React, { useContext } from 'react';
import Link from 'next/link';
import CartItem from './CartItem';

import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import { SidebarContext } from '@/context/Sidebar.context';
import { CartContext } from '@/context/Cart.context';



const Sidebar = () => {

  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, itemAmount, total, clearCart } = useContext(CartContext);

  return (
    <div className={`${isOpen ? "right-0" : "-right-full"} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className='flex justify-between items-center py-4 border-b'>
        <div className="uppercase text-sm font-semibold">Selected Items ({itemAmount})</div>
          <div onClick={ handleClose } className="cursor-pointer w-8 h-8 flex justify-center items-center">
            <IoMdArrowForward className="text-2xl"/>
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[420px] overflow-y-auto overflow-x-hidden border-b'>
        {
          cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))
        }
      </div>
      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full justify-between items-center'>
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total:</span> # {total}
          </div>
          <div
            onClick={ clearCart }
            className='cursor-pointer py-3 bg-red-500 hover:bg-red-600 text-white w-12 flex justify-center items-center text-xl rounded-lg transition duration-300'
          >
            <FiTrash2 />
          </div>
        </div>
        <div className='flex justify-center items-center w-full'>
          <Link
            href={"/"}
            className='bg-green-400 hover:bg-green-600 p-4 flex justify-center items-center text-white w-[12rem] font-medium rounded-lg transition duration-300'
          >
            Purchase
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;