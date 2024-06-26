import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

import image1 from '../../../assets/products/32LineRib.png';
import image2 from '../../../assets/products/50-50.png';
import image3 from '../../../assets/products/BlackZebra.png';
import image4 from '../../../assets/products/CTT.png';
import image5 from '../../../assets/products/Color LD.png';
import image6 from '../../../assets/products/DoubleDecker.png';
import image7 from '../../../assets/products/FlexSuction.png';

const images = [image1, image2, image3, image4, image5, image6, image7];

const ProductHero = () => {
  return (
    <div className="relative bg-orange-600 w-full h-64 md:h-80 lg:h-96">
    <Carousel
      showArrows={true}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      className="w-full h-full"
    >
      {images.map((image, index) => (
        <div key={index} className="w-full h-[300px] lg:h-[400px]  flex items-center justify-center" >
          <img src={image} alt={`Product image ${index + 1}`} className="max-h-full max-w-full  object-contain p-2" />
        </div>
      ))}
    </Carousel>
  </div>
  );
};

export default ProductHero;


