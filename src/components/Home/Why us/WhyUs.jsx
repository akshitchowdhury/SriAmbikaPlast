import React from "react";
import whyUs from "../../../assets/whyUs.webp"
const WhyUs = () => {
  return (
    <section className="py-8 px-4 md:py-16 md:px-20 bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <div className="flex flex-col items-start">
            <h1 className="text-3xl md:text-4xl text-gray-700 font-semibold mb-6 text-center md:text-left">
              Why Choose Shri Ambika Plast Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 text-center md:text-left">
              In the intricate world of water and agricultural piping, Shri
              Ambika Plast stands out with its unmatched expertise and extensive
              network of resources. We focus on addressing our customers' most
              pressing challenges and opportunities to streamline your
              operations and maximize your success. Our services encompass a
              broad spectrum, including top-quality suction and water pipes,
              efficient irrigation solutions, innovative product design,
              customized manufacturing, and comprehensive support. Whether you
              are looking for durable pipes for irrigation, reliable water
              delivery systems, or bespoke piping solutions, Shri Ambika Plast is
              your trusted partner in achieving excellence in the water and
              agri-pipe manufacturing industry.
            </p>
            <a href="tel:+91 8977031750" className="no-underline">
              <div className="flex items-center bg-white p-4 rounded-lg shadow-lg">
                <div className="text-gray-700 flex-1">
                  Have Any Question? Give us a call
                </div>
                <div className="text-orange-600 font-semibold">
                +91 9845511324
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={whyUs}
            alt="Ship"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
