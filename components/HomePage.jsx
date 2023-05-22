import React from 'react';
import Product from '@/components/Product';
import { penProduct, luxProduct } from '@/productInfo';
import Hero from './Hero';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <section className='py-6 px-[50px]'>
        <div className='container  mx-auto'>
          <div className='mb-7 mt-14'>
            <h3>Pen-Product</h3>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
              {
                  penProduct.map((item) => (
                      <Product key={item.key} product={item}/>
                  ))
              }
          </div>
          <div className='mt-[4rem] mb-7'>
            <h3>Lux-Product</h3>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 mb-[4rem]'>
              {
                  luxProduct.map((item) => (
                    <Product key={item.key} product={item} />
                  ))
              }
          </div> 
        </div>
      </section>
  </div>
  )
}

export default HomePage;