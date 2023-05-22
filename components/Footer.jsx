import React from 'react';
import Link from 'next/link';
import FooterLinks, { FooterSocial }  from './FooterLinks';

import { FaPhoneAlt } from "react-icons/fa";
import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className='bg-[#000000] py-12'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
          <div className='text-white'>
            <ul>
              <FooterLinks title="Home" path="/" />
              <FooterLinks title="Product" path="/" />
              <FooterLinks title="Contact" path="/" />
            </ul>
          </div>
          <div className='text-white text-[1.2rem] transition-all duration-300'>
            <ul>
              <li className='mb-2 '>
                <Link href={"/"} className='hover:text-[#FCA311]'>
                  Service
                </Link>
              </li>
              <li className='flex justify-start items-center mb-2'>
                <FaPhoneAlt /> <span className='ml-2'>081 000 78645</span>
              </li>
              <li className='flex justify-start items-center mb-2'>
                <FaPhoneAlt /> <span className='ml-2'>090 993 56268</span>
              </li>
            </ul>
          </div>
          <div className='text-white text-[1.6rem] transition-all duration-300'>
            <ul>
              <FooterSocial socialIcon={<BsWhatsapp />} path={"/"}/>
              <FooterSocial socialIcon={<BsInstagram />} path={"/"}/>
              <FooterSocial socialIcon={<BsFacebook />} path={"/"}/>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;