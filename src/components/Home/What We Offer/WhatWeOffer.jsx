import React from "react";
import whatWeOffer from "../../../assets/products/group.png";
const WhatWeOffer = () => {
  return (
    <>
      <section className="py-8 px-4 md:py-16 md:px-8 bg-gray-100">
        <h1 className="text-left font-semibold text-4xl  py-4">
          What We Offfer
        </h1>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 flex justify-center md:justify-start">
            <img
              src={whatWeOffer}
              alt="Source from India"
              className="max-w-full h-auto lg:h-[300px]"
            />
          </div>

          <div className="flex-1">
            <div className="flex flex-col items-start">
              <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-center md:text-left">
                Source from India
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6 text-center md:text-left">
                At Shri Ambika Plast, our supplier outreach initiative is an
                integral part of our overall strategy to add value to the
                communities we serve. Across our company, our employees are
                dedicated to leading the way in delivering top-quality piping
                solutions for water and agricultural applications. By engaging
                with our suppliers through this initiative, we ensure that we
                provide our customers and communities with both traditional and
                innovative piping products. Our supplier outreach is one of the
                key methods we use to achieve excellence and foster strong,
                mutually beneficial relationships within the industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeOffer;
