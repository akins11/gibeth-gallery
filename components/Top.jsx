"use client";

import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';

import { SidebarContext } from '@/context/Sidebar.context';
import { CartContext } from '@/context/Cart.context';

import { BsBag } from "react-icons/bs";



const Top = () => {

  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  })

  return (
    <header className={`${isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"} fixed w-full z-10 transition-all`}>
      <div className='container px-[50px] mx-auto flex justify-between items-center h-full'>
        <Link href={"/"} className='text-white'>
          Gellery
        </Link>
        <div
          onClick={ () => setIsOpen(!isOpen) }
          className={`cursor-pointer flex relative ${isActive ? "text-[#14213D]" : "text-white"}`}
        >
          <BsBag className="text-2xl" />
          <div
            className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'
          >
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Top;