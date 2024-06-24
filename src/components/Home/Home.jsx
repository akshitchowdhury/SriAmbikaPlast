import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <div className="home h-[200vh] md:h-[100vh]">{/* Background div */}</div>
      
      <hr className="w-full absolute top-[60px] right-[0%] md:w-[100rem] my-4 border-opacity-50 border-white" />
      
      <div className="container absolute top-[60px]
       mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center gap-8">
        
        <div className="HomeLeft flex-1 flex flex-col items-center p-5 md:p-20 gap-5 ">
          <div className="flex flex-col w-full text-center md:text-left">
            <p className="text-lg my-4 w-full md:w-2/3 text-white font-normal">
              Top quality Pipe manufactureres in the industry.
            </p>
            
            <div className="text-4xl md:text-7xl font-semibold text-white leading-tight md:leading-[79px]">
              Sri Ambika Plast
            </div>
            
            <p className="text-lg my-4 w-full md:w-2/3 text-white font-normal">
              Manufacturers in Suction Hose, Braided Hose, Garden and Tubing Hose.
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
              
              <button
                type="button"
                className="text-orange-600 px-6 py-2 h-14 w-full sm:w-auto md:w-48
                  bg-white focus:ring-4 focus:outline-none
                  focus:ring-blue-300 font-medium text-sm dark:orange-600 dark:focus:ring-blue-800
                  hover:bg-orange-600 hover:text-white hover:transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out
                  sm:mt-4 md:mt-0 lg:mt-0"
              >
                Brochure
              </button>
            </div>
          </div>
        </div>
        
        <div className="ContactForm flex-1 bg-white bg-opacity-10 
        backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">Contact Us</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-4 py-2 bg-white bg-opacity-20 text-white border border-transparent rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 bg-white bg-opacity-20 text-white border border-transparent rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full px-4 py-2 bg-white bg-opacity-20 text-white border border-transparent rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
