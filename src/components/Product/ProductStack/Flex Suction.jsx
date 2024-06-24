import React from 'react'
import productsData from '../productData'

const FlexSuction = () => {
  return (
    <div className='h-[100vh] bg-gray-600'>
      Only {productsData[0].subproducts[0].product.ProductName}
      <p>
        MEasurements : {productsData[0].subproducts[0].product.sizeWeight.map(
          (item, index)=>(
            (
            <>
              <div key={index}>
                <p>
                  Size: {item.s}
                </p>
                <p>
                  Weight: {item.w}
                </p>
                
              </div>
            </>
           ) 
          )
        )}
      </p>
      <p>
      Colors: {productsData[0].subproducts[0].product.colors[0]}
      </p>
      <p>
      Roll Length: {productsData[0].subproducts[0].product.rollLength}
      </p>
    </div>
  )
}

export default FlexSuction
