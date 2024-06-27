import React from 'react'
import { Link } from 'react-router-dom'
const QuickLinks = () => {
    
    const handleClick = () => {
        window.scrollTo({ behavior: 'smooth', top:"0" });
      };
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white text-left">Quick Links</h2>
            <ul className="Qlinks text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium text-left">
              <li className="mb-4  ">
                <Link to="/" onClick={ handleClick} className="navbar-links">Home</Link>
              </li>
              <li className="mb-4">
                <Link to="/about" onClick={ handleClick} className="navbar-links">About Us</Link>
              </li>
              {/* <li className="mb-4">
                <Link to="/services" onClick={ handleClick(servicesRef)} className="navbar-links">Services</Link>
              </li> */}
              {/* <li className="mb-4">
                <Link to="/portfolio" onClick={ handleClick(portfolioRef)} className="navbar-links">Portfolio</Link>
              </li> */}
              <li className="mb-4">
                <Link to="/products" onClick={ handleClick} className="navbar-links">Products</Link>
              </li>
              <li className="mb-4">
                <Link to="/contact" onClick={ handleClick} className="navbar-links">Contact Me</Link>
              </li>
            </ul>

            
       
      
      
    </div>
  )
}

export default QuickLinks
