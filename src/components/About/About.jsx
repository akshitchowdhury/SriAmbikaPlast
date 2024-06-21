import React from "react";
import v1 from "../../assets/qualityExcellence.jpg";
import v2 from "../../assets/innovativeProducts.jpg";
import v3 from "../../assets/customerSatisfaction.png";

import m1 from "../../assets/ethicalBusiness.jpeg";
import m2 from "../../assets/creativeInnovation.jpg";
import m3 from "../../assets/expertise.webp";
import approach from "../../assets/approach.png";
import CountRise from "./CountRise/CountRise";
import './About.css'

const About = () => {
  const visionData = [
    {
      title: "Quality Excellence",
      description:
        "Awarded QUALITY EXCELLENCE AWARD from Indian Achievers Forum for outstanding product quality.",
      imageUrl: v1,
    },
    {
      title: "Innovative Products",
      description:
        "Pioneers in manufacturing 36 feet wide, 100% waterproof tarpaulin without any joints and LAXSON TPR Tubing Pipe.",
      imageUrl: v2,
    },
    {
      title: "Customer Satisfaction",
      description:
        "Committed to providing 100% satisfaction and return on investment for all customers.",
      imageUrl: v3,
    },
  ];

  const missionData = [
    {
      title: "Ethical Business",
      description:
        "Conducting business with long-term reliability and integrity rather than seeking shortcuts for fast profits.",
      imageUrl: m1,
    },
    {
      title: "Creative Innovation",
      description:
        "Investing maximum time in generating creative and innovative ideas for business development.",
      imageUrl: m2,
    },
    {
      title: "Expertise",
      description:
        "Combining 35 years of trading experience and 12 years of manufacturing expertise to deliver top-quality products.",
      imageUrl: m3,
    },
  ];

  return (
    <>
      <section className="about-section bg-cover bg-center">
        <div className="container mx-auto px-4 py-20 md:py-40">
          <div className="flex flex-col my-[100px] items-start justify-start gap-4 text-start">
            <h1 className="text-3xl font-bold text-white md:text-5xl">
              About Us 
            </h1>
            <p className="text-xl font-semibold text-gray-300 md:text-2xl">
              Leading the industry with innovative and reliable agricultural and construction piping solutions.
            </p>
          </div>
        </div>
      </section>
    
    <div className="bg-gray-100 p-6 md:p-28 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 mx-6 md:mx-20 ">
          <div className="flex w-full md:w-3/4">
            <img
              loading="lazy"
              src={approach}
              className="w-full h-auto "
              alt="Our Approach"
            />
          </div>

          <div className="flex flex-col  w-full md:w-full ">
            <div className="text-justify mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Who We Are</h1>
              <p className="mt-4 text-gray-600">
                Sree Ambika Plast is an ISO 9001-2015 certified company based in Rajkot, specializing in the manufacturing of agricultural pipes for irrigation, and delivery pipes for home and construction use. Established in 2006, we aim to provide innovative and superior products that surpass traditional market offerings, ensuring 100% customer satisfaction and value.
              </p>
            </div>
          </div>
        </div>

        <CountRise />

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Our Vision
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visionData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden
              hover:scale-105 transition ease-in-out duration-300"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-48 object-contain"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Our Mission
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {missionData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden
              hover:scale-105 transition ease-in-out duration-300"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-48 object-contain"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default About;
