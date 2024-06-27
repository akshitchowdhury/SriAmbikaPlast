import React from 'react';
import productsData from '../productData'; 
 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import durable from "../../../assets/products/strongDurable.png";
import wearResistant from "../../../assets/products/wearResistant.webp";
import ecoFriendly from "../../../assets/products/ecoFriendly.jpg";
import vibrantColors from "../../../assets/products/vibrantColors.png";
const LevelTube = () => {
  const product = productsData[2].subproducts[10].product;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-6xl w-full p-8">
        <p className="text-2xl font-semibold text-white bg-orange-600 w-full p-4 text-center">
          SHRI ANCHAR ROYAL FLEX 
        </p>
        <div className="flex flex-col md:flex-row items-start mt-6">
          <div className="w-full md:w-1/2 lg:w-[500px] lg:h-[500px] h-auto object-cover rounded mb-6 md:mb-0">
            <Slider {...settings}>
              {product.image.map((imgSrc, index) => (
                <div key={index}>
                  <img
                    src={imgSrc}
                    alt={`${product.ProductName} ${index + 1}`}
                    className="w-full h-auto object-cover rounded"
                  />
                </div>
              ))}
            </Slider>
            <h1 className="text-2xl font-bold text-orange-600 mt-4 text-center">
              {product.ProductName}
            </h1>
          </div>
          <div className="md:ml-6 w-full md:w-1/2">
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-3 px-5 bg-orange-600 text-white font-bold uppercase text-lg border-b border-gray-300">
                      Size
                    </th>
                    <th className="py-3 px-5 bg-orange-600 text-white font-bold uppercase text-lg border-b border-gray-300">
                      Weight
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.sizeWeight.map((item, index) => (
                    <tr key={index} className="even:bg-orange-200">
                      <td className="py-3 px-5 text-gray-700 text-center font-semibold text-lg border-r border-gray-300">
                        {item.s}
                      </td>
                      <td className="py-3 px-5 text-gray-700 text-center font-semibold text-lg">
                        {item.w}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-bold text-green-600 mb-4">
                ROLL LENGTH: {product.rollLength}
              </h2>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Product Quality:
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center p-4 bg-orange-500 text-white rounded-lg">
                  <img
                    src={durable}
                    alt="Durability"
                    className="w-12 h-12 mb-2"
                  />
                  <span className="text-center">
                    High durability and flexibility
                  </span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white text-orange-500 rounded-lg">
                  <img
                    src={wearResistant}
                    alt="Wear Resistance"
                    className="w-12 h-12 mb-2"
                  />
                  <span className="text-center">
                    Resistant to wear and tear
                  </span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white text-orange-500 rounded-lg">
                  <img
                    src={ecoFriendly}
                    alt="Eco-friendly"
                    className="w-12 h-12 mb-2"
                  />
                  <span className="text-center">Eco-friendly materials</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-orange-500 text-white rounded-lg">
                  <img
                    src={vibrantColors}
                    alt="Vibrant Colors"
                    className="w-16 h-12 mb-2"
                  />
                  <span className="text-center">Multiple vibrant colors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      style={{ ...style, display: "block" }}
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
      style={{ ...style, display: "block" }}
    >
      Previous
    </button>
  );

}

export default LevelTube;
