import React from 'react';
import productsData from './productData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

// Component to display each product card
const ProductCard = ({ productName, image }) => {
    const productPath = productName.toLowerCase().replace(/\s+/g, '-');
    return (
      <Link to={`/${productPath}`}>
        <div className="bg-white shadow-md rounded-lg overflow-hidden m-4 p-4 relative">
          <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
            {/* Placeholder image if none is provided */}
            <img src={image} alt={productName} className="h-full w-full" />
          </div>
          <h2 className="text-lg font-semibold mt-2 text-center">{productPath}</h2>
          <div className="absolute bottom-0 left-0 m-2">
            <FontAwesomeIcon icon={faPhone} className="text-blue-500 transition duration-300 hover:text-blue-700 transform hover:scale-110" />
          </div>
          <div className="absolute bottom-0 right-0 m-2">
            <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 transition duration-300 hover:text-green-700 transform hover:scale-110" />
          </div>
        </div>
      </Link>
    );
  };
// Main Products component to display categories and their products
const Products = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {productsData.map((categoryData, index) => (
        <div key={index} className="mb-8">
          <h1 className="text-2xl font-bold mb-4">{categoryData.category}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
