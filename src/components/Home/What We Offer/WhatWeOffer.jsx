import React from 'react';
import whatWeOffer from "../../../assets/whatWeOffer.jpg"
const WhatWeOffer = () => {
  return (
    <>
    
    <section className="py-8 px-4 md:py-16 md:px-8 bg-gray-100">
    <h1 className='text-left font-semibold text-4xl text-gray-700 py-4'>What We Offfer</h1>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex-1 flex justify-center md:justify-start">
          <img src={whatWeOffer} alt="Source from India" className="max-w-full h-auto" />
        </div>
        
        <div className="flex-1">
          <div className="flex flex-col items-start">
            <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-center md:text-left">Source from India</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 text-center md:text-left">
              Our supplier outreach initiative is part of our overall business strategy to add value to the communities we serve. Company-wide, our employees share a commitment to being the leader in providing our customers and communities with traditional and innovative utility services, and Supplier Outreach is one of the ways we accomplish this.
            </p>
          </div>
        </div>
        
      </div>
    </section>
    </>
  );
};

export default WhatWeOffer;