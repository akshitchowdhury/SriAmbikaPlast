import React, { useRef, useState } from 'react';
import productsData from './productData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import WhatsApp from './Whatsapp';
import ProductHero from './Product Hero Section/ProductHero';
import ProductsAtGlance from '../Home/Products at a Glance/ProductsAtGlance';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const ProductCard = ({ productName, image }) => {
  const productPath = productName.toLowerCase().replace(/\s+/g, '-');
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="relative bg-white shadow-lg border border-gray-200 rounded-none overflow-hidden m-4 p-4 w-[260px] lg:w-full 
    transition transform hover:bg-opacity-30 hover:backdrop-filter hover:backdrop-blur-lg">
      <Link to={`/${productPath}`} onClick={handleClick} className="block relative group">
      <div className="w-full h-48 flex items-center justify-center overflow-hidden">
          <img src={image[0]} alt={productName} className="h-full w-full object-contain transition-transform duration-300 transform group-hover:scale-110" />
        </div>
      </Link>
      <h2 className="text-sm md:text-xl text-gray-700 font-semibold mt-4 text-center capitalize">{productName}</h2>
      <div className="absolute bottom-0 left-0 m-4">
        <a href="tel:+91 9448539183" style={{ cursor: "pointer" }} className="border border-gray-300 rounded w-8 h-8 flex items-center justify-center">
          <FontAwesomeIcon icon={faPhone} className="text-blue-500 transition duration-300 hover:text-blue-700 h-5 transform hover:scale-110" />
        </a>
      </div>
      <div className="absolute bottom-0 right-0 m-4">
        <div className="border border-gray-300 rounded w-8 h-8 flex items-center justify-center">
          <WhatsApp />
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = productsData.filter((categoryData) => {
    return (
      categoryData.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      categoryData.subproducts.some((subproduct) =>
        subproduct.product.ProductName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  });

  return (
    <>
      <ProductsAtGlance />
      <div className="mb-8 my-12 flex justify-center " data-aos="fade-up">
        <input
          type="text"
          placeholder="Search products by name or category"
          className="w-[300px] sm:w-[500px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="container mx-auto px-4 py-8" data-aos="fade-up">
        {filteredProducts.map((categoryData, index) => (
          <div key={index} className="mb-12" data-aos="fade-up">
            <h1 className="text-2xl md:text-4xl font-semibold mb-6">{categoryData.category}</h1>
            <div className={`grid grid-cols-1  md:grid-cols-3 lg:grid-cols-${categoryData.subproducts.length < 3 ? '2' : '3'} gap-6`}>
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
    </>
  );
};

export default Products;
