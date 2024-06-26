import React from 'react';
import productsData from '../productData'; 

const GoodLonBraided = () => {
  const product = productsData[1].subproducts[1].product;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden max-w-6xl w-full p-8">
        <p className="text-2xl font-semibold text-white bg-orange-600 w-full p-4 text-center">SHRI ANCHAR ROYAL FLEX </p>
        <div className="flex flex-col md:flex-row items-center mt-6">
          <div className="w-full md:w-1/2 lg:w-[500px] lg:h-[500px] h-auto object-cover rounded mb-6 md:mb-0">
            <img 
              src={product.image} 
              alt={product.ProductName} 
              className="w-full h-auto object-cover"
            />
            <h1 className="text-2xl font-bold text-orange-600 mt-4 text-center">{product.ProductName}</h1>
          </div>
          <div className="md:ml-6 w-full md:w-1/2">
          <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-3 px-5 bg-orange-600 text-white font-bold uppercase text-lg border-b border-gray-300">Size</th>
                    <th className="py-3 px-5 bg-orange-600 text-white font-bold uppercase text-lg border-b border-gray-300">Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {product.sizeWeight.map((item, index) => (
                    <tr key={index} className="even:bg-orange-200">
                      <td className="py-3 px-5 text-gray-700 text-center text-lg border-r border-gray-300">{item.s}</td>
                      <td className="py-3 px-5 text-gray-700 text-center text-lg">{item.w}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-bold text-green-600">ROLL LENGTH: {product.rollLength}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoodLonBraided;
