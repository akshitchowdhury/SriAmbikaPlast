import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductsAtGlance.css';
import productsData from '../../Product/productData';  // Adjust the path as necessary

const ProductsAtGlance = () => {
  const flattenedProducts = productsData.flatMap(category =>
    category.subproducts.map(subproduct => subproduct.product)
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
//   const productRef = useRef(null);
//   const handleClick = (ref) => {
//     ref.current.scrollIntoView({ behavior: 'smooth' });
//   };
  
const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };  
return (
    <section id="cat" className="cat py-12 px-6 bg-gray-100">
      <div className="container-fluid">
        <div className="section-title text-center mb-8">
          <h2 className="text-3xl font-bold">Products at <b className='text-orange-500 font-semibold'>a Glance</b></h2>
          <span className="block w-32 h-1 bg-orange-500 mx-[370px] -my-4"></span>
          <span className="block w-32 h-1 bg-orange-500 mx-[800px] my-[12px]"></span>
          <span className="block w-32 h-1 bg-orange-500 md:bg-gray-100 md:mx-auto md:my-8"></span>
        </div>
        <Slider {...settings}>
          {flattenedProducts.map((product, index) => (
            <div key={index} className="px-4">
              <div className="cat_single_box">
                <div className="img_holder relative">
                  <img src={product.image} alt={product.ProductName} className="w-full h-[40px] object-contain" />
                  <Link to={`/${product.ProductName.toLowerCase().replace(/\s+/g, '-')}`}
                   onClick={handleClick} className="overlay absolute inset-0 
                    flex items-center justify-center ">
                    <div className="text-white text-center">
                      <h3 className="text-lg font-semibold">{product.ProductName}</h3>
                    </div>
                  </Link>
                </div>
                <h3 className="text-center mt-2"></h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={`${className} slick-next slick-arrow`}
      onClick={onClick}
      aria-label="Next"
      style={{ ...style, display: 'block' }}
    >
      Next
    </button>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={`${className} slick-prev slick-arrow `}
      onClick={onClick}
      aria-label="Previous"
      style={{ ...style, display: 'block' }}
    >
      Previous
    </button>
  );
};

export default ProductsAtGlance;
