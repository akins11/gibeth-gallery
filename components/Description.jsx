import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { TbDiscountCheckFilled } from "react-icons/tb";
import { GiCancel } from "react-icons/gi";
import { FiHome } from "react-icons/fi";


const Description = ({ product }) => {

    const {id, title, description, status, image, category, price} = product;

    return (
        <div className='flex flex-col p-[2rem]'>
            <h2 className='font-medium mb-[1rem] ml-[6.3rem]'>{title}</h2>
            <div className='flex justify-around items-start flex-wrap'>
                <div className='p-2'>
                    <Image 
                        src={image}
                        alt=' '
                        width={300}
                        height={400}
                    />
                </div>
                <div className='flex flex-col items-center gap-5 p-2'>
                    <p className='h-[50%]'>{description}</p>
                    <div className='flex flex-col items-start  w-full gap-[1rem]'>
                        <div className='flex justify-start items-center gap-[1rem] border-b p-1'>
                            <h5 className='font-medium'>Category :</h5>
                            <span className='font-bold'>{category}</span>
                        </div>
                        <div className='flex justify-start items-center gap-[1rem] border-b p-1'>
                            <h5 className='font-medium'>Status :</h5>
                            <span className='font-bold'>{status}</span>
                            
                            {
                                status === "Available" ? (
                                    <TbDiscountCheckFilled className='text-[#FCA311]'/>
                                ) : (
                                    <GiCancel className='text-red-500'/>
                                )
                            }
                        </div>
                        <div className='flex justify-start items-center gap-[1rem] border-b p-1'>
                            <h5 className='font-medium'>Price :</h5>
                            <span className='font-bold'># {price}</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <button className='bg-green-400 hover:bg-green-600 p-5 flex justify-center items-center text-white font-medium w-[5rem] h-[2rem] rounded-lg transition duration-300'>
                            <Link href={"/"}>
                                Purchase
                            </Link>
                        </button>
                        <div className='bg-yellow-500 hover:bg-yellow-600 p-5 flex justify-center items-center text-white font-medium w-[5rem] h-[2rem] rounded-lg transition duration-300'>
                            <Link href={"/"} className='text-[1.5rem]'>
                                <FiHome />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description;