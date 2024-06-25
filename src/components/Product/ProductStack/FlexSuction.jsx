import React from 'react';
import productsData from '../productData';

const FlexSuction = () => {
  const product = productsData[0].subproducts[0].product;

  return (
    <div className="min-h-screen bg-orange-400 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">{product.ProductName}</h1>
        <div className="flex flex-col md:flex-row items-center">
          <img 
            src={product.image} 
            alt={product.ProductName} 
            className="w-full md:w-1/2 h-auto object-cover rounded mb-6 md:mb-0"
          />
          <div className="md:ml-6 w-full md:w-1/2">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 bg-gray-200 text-gray-800 font-bold uppercase text-sm">Size</th>
                    <th className="py-2 px-4 bg-gray-200 text-gray-800 font-bold uppercase text-sm">Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {product.sizeWeight.map((item, index) => (
                    <tr key={index} className="even:bg-gray-100">
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-700">{item.s}</td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-700">{item.w}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6">
              <p className="text-gray-700 mb-2"><strong>Colors:</strong> {product.colors.join(', ')}</p>
              <p className="text-gray-700"><strong>Roll Length:</strong> {product.rollLength}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlexSuction;
