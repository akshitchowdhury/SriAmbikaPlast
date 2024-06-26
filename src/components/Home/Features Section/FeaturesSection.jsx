import React from 'react';
import resistantWeather from '../../../assets/resitantToWeather.png'
import uniqueEye from '../../../assets/uniqueEye.png'
import qltyAssure from '../../../assets/qualityAssurance.png'
import safepacking from '../../../assets/safePacking.png'
const FeaturesSection = () => {
  const features = [
    {
      imgSrc: resistantWeather,
      title: 'Highly Resistant to Weather',
    },
    {
      imgSrc: uniqueEye,
      title: 'Unique Eye-Magnetic Colour',
    },
    {
      imgSrc: qltyAssure,
      title: 'Consistent Quality Assurance',
    },
    {
      imgSrc: safepacking,
      title: 'Attractive & Safe Packing',
    },
  ];

  return (
    <section id="fact" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Features to decide <b className='text-orange-600'>the right Product</b></h2>
          <span className="block w-32 h-1 bg-orange-600 mx-auto my-4"></span>
        </div>
        <div className="flex flex-wrap -mx-4">
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8 ">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-orange-500 
              hover:scale-105 transition ease-in-out duration-300">
                <img src={feature.imgSrc} alt={feature.title} className="mx-auto mb-4" />
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
