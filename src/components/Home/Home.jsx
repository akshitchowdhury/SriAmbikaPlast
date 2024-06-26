import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import HomeContact from "./Home Contact Form/HomeContact";
import WhyUs from "./Why us/WhyUs";
import WhatWeOffer from "./What We Offer/WhatWeOffer";
import Product from "../Product/Product";
import FeaturesSection from "./Features Section/FeaturesSection";
import ProductsAtGlance from "./Products at a Glance/ProductsAtGlance";

const Home = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <div className="home h-[900px] md:h-[100vh]">
        
      </div>
      <div
          className="container absolute top-12 md:labsolute md:top-0 lg:absolute lg:top-24
       mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <div className="HomeLeft flex-1 flex flex-col items-center p-5 md:p-20 gap-5 ">
            <div className="flex flex-col w-full text-center md:text-left">
              <p className="text-lg my-4 w-full md:w-2/3 text-white font-normal">
                Top quality Pipe manufactureres in the industry.
              </p>

              <div className="text-xl md:text-7xl font-semibold text-white leading-tight md:leading-[79px]">
                Shri Ambika Plast
              </div>

              <p className="text-lg my-4 w-full md:w-2/3 text-white font-normal">
                Manufacturers in Suction Hose, Braided Hose, Garden and Tubing
                Hose.
              </p>

              <div className="buttons flex flex-wrap justify-center md:justify-start gap-6">
                <Link to="/contact">
                  <button
                    type="button"
                    className="text-white px-6 py-2 h-14 w-1/5 sm:w-auto lg:w-16 md:w-16
                    bg-transparent border-2 border-orange-600 focus:ring-4 focus:outline-none
                    focus:ring-blue-300 font-medium text-sm dark:bg-blue-600 dark:focus:ring-blue-800
                    hover:bg-white hover:text-orange-600 hover:transform 
                    hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out
                    sm:ml-0 lg:ml-2 md:ml-2"
                  >
                    <FontAwesomeIcon icon={faPhone} className="-mx-1 md:mx-0" />
                  </button>
                </Link>

                <Link to={"/products"} onClick={handleClick}>
                <button
                  type="button"
                  className="text-orange-600 px-6 py-2 h-14 w-full sm:w-auto md:w-48
                  bg-white focus:ring-4 focus:outline-none
                  focus:ring-blue-300 font-medium text-sm dark:orange-600 dark:focus:ring-blue-800
                  hover:bg-orange-600 hover:text-white hover:transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out
                  sm:mt-4 md:mt-0 lg:mt-0"
                >
                  View our Products
                </button>
                </Link>
              </div>
            </div>
          </div>
          
          <HomeContact />
        </div>
        <ProductsAtGlance/>
        <FeaturesSection/>
      <WhatWeOffer />
      <WhyUs />
    </>
  );
};

export default Home;
