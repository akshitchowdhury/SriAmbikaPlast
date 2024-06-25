import React from 'react';
import productsData from './productData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const ProductCard = ({ productName, image }) => {
  const productPath = productName.toLowerCase().replace(/\s+/g, '-');
  return (
    <Link to={`/${productPath}`} className="block">
      <div className="bg-white shadow-lg rounded-md overflow-hidden m-4 p-6 
      h-[100%] w-[70%]
      relative transition transform hover:scale-105">
        <div className="w-full  bg-gray-200 flex items-center justify-center">
          <img src={image} alt={productName} className="h-full w-full object-contain" />
        </div>
        <h2 className="text-xl font-semibold mt-4 text-center capitalize">{productName}</h2>
        <div className="absolute bottom-0 left-0 m-4">
          <FontAwesomeIcon icon={faPhone} className="text-blue-500 transition duration-300 hover:text-blue-700 transform hover:scale-110" />
        </div>
        <div className="absolute bottom-0 right-0 m-4">
          <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 transition duration-300 hover:text-green-700 transform hover:scale-110" />
        </div>
      </div>
    </Link>
  );
};

const Products = () => {
  return (
    <div className="container mx-6 px-4 py-8">
      {productsData.map((categoryData, index) => (
        <div key={index} className="mb-8">
          <h1 className="text-2xl font-bold mb-4">{categoryData.category}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
            {categoryData.subproducts.map((subproduct, subIndex) => {
              const { ProductName, image } = subproduct.product;
              return (
                <ProductCard key={subIndex} productName={ProductName} image={image} />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
