import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const WhatWeDo = () => {
  const webDesRef = useRef(null)
  const webDevRef = useRef(null)
  const appDevRef = useRef(null)
  const socialMediaRef = useRef(null)
  const digitalMarktRef = useRef(null)
  const logoDesRef = useRef(null)

  const handleClick = ()=>{
    window.scrollTo({ behavior: 'smooth', top: "0" });
  }
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white text-left">Products</h2>
  <ul className="miniServices text-gray-500 dark:text-gray-400 font-medium text-left">
  <Link to ="/products" onClick={ handleClick}>
    <li className="mb-4">
      Suction Hose
    </li>
    </Link>

    <Link to ="/products" onClick={ handleClick}>
    <li className="mb-4">
      Braided Hose
    </li>
    </Link>
    
    <Link to ="/products" onClick={ handleClick}>
    <li className="mb-4">
      Garden and Tubing Hose
    </li>
    </Link>

    <Link to ="/products" onClick={ handleClick}>
    <li className="mb-4">
      L.D. Kissan Pipe
    </li>
    </Link>

    
    
  </ul>
    </div>
  )
}

export default WhatWeDo
