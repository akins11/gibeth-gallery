import React from 'react';
import { penProduct, luxProduct } from '@/productInfo';
import Description from '@/components/Description';

const DetailPage = ({ params }) => { // : { id }
  const allProducts = [...penProduct, ...luxProduct];

  const productDetail = allProducts.find((p) => p.id === params.id);

  // console.log(photo);

  return (
    <div className='container px-[10rem] mx-auto my-10'>
      <div className='border border-gray-200 hover:border-gray-400 rounded-lg transition duration-300'>
        <div>
          <Description product={productDetail} />
        </div>
      </div>
    </div>
  );
}

export default DetailPage;