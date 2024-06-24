import React from 'react'
import productsData from './productData'
const Product = () => {
  return (
    <div className='h-[100vh] bg-gray-700'>
      <h1 className='text-black text-center'>
        {productsData[0].category1}
      </h1>
      <h1 className='text-black text-center'>
        {productsData[0].subproducts[0].product1.colors}
      </h1>
      <h1>Hello Products</h1>
    </div>
  )
}

export default Product
