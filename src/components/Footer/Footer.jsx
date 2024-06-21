import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { generateLink } from "@reslear/whatsapp-link";
import QuickLinks from "./QuickLinks";
import WhatWeDo from "./WhatWeDo";
import ImportantLinks from "./ImportantLinks";
import AdressBlock from "./AdressBlock";
import "./Footer.css";

const Footer = () => {
  const handleClick = () => {
    const url = generateLink({ phone: 9448539183, message: "Welcome to Sri Ambika Plast...Feel free to connect with us" });
    window.open(url, '_blank');
  };

  return (
    <footer className="footer bg-orange-600 text-white">
      <div className="footerBlock1 mx-auto w-full max-w-screen-xl py-12">
        <div className="grid grid-cols-2 gap-8 px-4 lg:grid-cols-4">
          <div className="md:col-span-1">
            <QuickLinks />
          </div>
          <div className="md:col-span-1">
            <WhatWeDo />
          </div>
          <div className="md:col-span-1">
            <ImportantLinks />
          </div>
          <div className="md:col-span-1">
            <AdressBlock />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 text-gray-800 py-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center">
          © 2024 <a href="https://flowbite.com/" className="hover:underline">Sri Ambika Plast</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 md:mt-0 space-x-6 justify-center md:justify-start">
          <a href="https://www.instagram.com/sriambikaplast/" className="text-gray-800 hover:text-gray-900"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
          <a href="https://www.linkedin.com/in/sriambikaplast/" className="text-gray-800 hover:text-gray-900"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
          <a href="mailto:seraramsolanki@gmail.com" className="text-gray-800 hover:text-gray-900"><FontAwesomeIcon icon={faEnvelope} size="lg" /></a>
          <a href="tel:+919448539183" className="text-gray-800 hover:text-gray-900"><FontAwesomeIcon icon={faPhone} size="lg" /></a>
          <button onClick={handleClick} className="text-gray-800 hover:text-gray-900"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
