import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo2.png";
// import "./NAv.css";
// import { Dropdown } from "flowbite-react";
import ServiceHover from "./ServiceHover";
function NAv() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }; 
  return (
    <nav className="bg-orange-600 dark:bg-orange-600 w-full md:h-[70px] z-20 top-0 start-0 relative sticky">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
        <Link
          to="/" onClick={handleClick}
          className="flex flex-col -my-12 items-center space-x-2 rtl:space-x-reverse"
        >
            <img src={logo} className="h-[170px]" alt="Flowbite Logo" />

          </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/contact" onClick={handleClick}>
            {" "}
            <button
              type="button"
              className="text-black bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
                text-sm px-6 py-3 text-center dark:bg-blue-600 dark:focus:ring-blue-800 
               hover:bg-orange-400 hover:text-white rounded-md 
               hover:transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
            >
              Contact US
            </button>
          </Link>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={menuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="absolute top-full right-0 w-[150px] 
          opacity-90 ease-in-out duration-300 bg-orange-500 text-white border border-gray-200 md:hidden">
 
            <ul className="flex flex-col p-4 md:p-0  font-thin text-sm uppercase">
              <li className="navLinks">
                <Link
                  to="/"
                  className="block py-2 px-3  hover:text-orange-400"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li className="navLinks">
                <Link
                  to="/about"
                  className="block py-2 px-3 hover:text-orange-400"
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
              </li>
              {/* <li >
                <Link
                  to="/services"
                  className="block py-2 px-3 hover:text-black"
                  onClick={toggleMenu}
                >
                 Products
                </Link>
              </li> */}
              {/* <li className="navLinks">
                <Link
                  to="/portfolio"
                  className="block py-2 px-3 hover:text-black"
                  onClick={toggleMenu}
                >
                  Portfolio
                </Link>
              </li> */}
              <li className="navLinks">
                <Link
                  to="/products"
                  className="block py-2 px-3 hover:orange-400"
                  onClick={toggleMenu}
                >
                  Products
                </Link>
              </li>
              <li className="navLinks">
                <Link
                  to="/contact"
                  className="block py-2 px-3 hover:orange-400"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col gap-6 p-4 md:p-0 mt-4  font-medium	
            border border-gray-100 rounded-lg  
           md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 
           text-lg
            dark:border-gray-700">
            <li className="navLinks">
              <Link
                to="/"
                onClick={handleClick}
                className="block py-2 px-3 text-white
                font-normal bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-blue-500 md:hover:text-orange-200"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="navLinks">
              <Link
              onClick={handleClick}
                to="/about"
                className="block py-2 px-
                font-normal text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:hover:text-orange-200 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                About Us
              </Link>
            </li>
            
            {/* <ul className="flex flex-row gap-x-0.1">
            <li className="services">
              
              <div
                className="block py-2 px-3 text-white rounded
                 hover:bg-gray-100 md:hover:bg-transparent 
                 
                 md:p-0 md:hover:text-orange-200 dark:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white 
                  md:dark:hover:bg-transparent dark:border-gray-700
                  cursor-pointer"
              >
              <ServiceHover/>
    </div>
            </li>
            


            </ul> */}
            
            <li className="navLinks">
              <Link
                to="/products"
                onClick={handleClick}
                className="block py-2 px-3
                font-normal text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:hover:text-orange-200 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Products
              </Link>
            </li>
            <li className="navLinks">
              <Link
                to="/contact"
                onClick={handleClick}
                className="block py-2 px-3
                font-normal text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:hover:text-orange-200 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NAv;
