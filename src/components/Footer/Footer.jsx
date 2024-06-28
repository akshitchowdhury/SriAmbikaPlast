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
import footerLogo from "../../assets/logo2.png"
const Footer = () => {
  const handleClick = () => {
    const url = generateLink({ phone: 9448539183, message: "Welcome to Shri Ambika Plast...Feel free to connect with us" });
    window.open(url, '_blank');
  };

  return (
    <footer className="footer overflow-clip bg-orange-600 text-white">
      <div className="footerBlock1 mx-auto w-full max-w-screen-xl py-12">
        <div className="grid grid-cols-2 gap-8 px-4 lg:grid-cols-4">
          {/* <div className="md:col-span-1">
          
            
          </div> */}
          <div className="md:col-span-1">
          <AdressBlock />
            
          </div>
          <div className="md:col-span-1">
          <QuickLinks />
          </div>
          <div className="md:col-span-1">
            <WhatWeDo />
          </div>
          {/* <div className="md:col-span-1">
          <ImportantLinks />
          </div> */}
          <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.942406986801!2d77.5116481750765!3d12.97553548734019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3c3296cc28ff%3A0x1a45ef7cde68296e!2s16%2C%2015th%20Cross%20Rd%2C%20Nagarbhavi%20Second%20Stage%2C%20Malagala%2C%20Krishnananda%20Nagar%2C%20Naagarabhaavi%2C%20Bengaluru%2C%20Karnataka%20560072!5e0!3m2!1sen!2sin!4v1719314044310!5m2!1sen!2sin"
        // width="400"
        // height="250"
        style={{ border: 0 }}
        className="md:-mx-20, h-[200px] w-[130px] md:w-[300px] md:h-[250px], "
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Embed"
      ></iframe>
      </div>
        </div>
        <br/>
        <br/>
      <img src={footerLogo} className="h-[170px]  -my-[90px] mx-[70px] md:mx-[500px]" alt="Flowbite Logo" />
      </div>
      <div className="bg-gray-100 text-gray-800 py-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center">
          © 2024 <a href="https://flowbite.com/" className="hover:underline">Shri Ambika Plast</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 md:mt-0 space-x-6 justify-center md:justify-start">
          <a href="https://www.instagram.com/Shriambikaplast/" className="text-gray-800 hover:text-gray-900"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
          <a href="https://www.linkedin.com/in/Shriambikaplast/" className="text-gray-800 hover:text-gray-900"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
          <a href="mailto:seraramsolanki@gmail.com" className="text-gray-800 hover:text-gray-900"><FontAwesomeIcon icon={faEnvelope} size="lg" /></a>
          <a href="tel:+919448539183" className="text-gray-800 hover:text-gray-900"><FontAwesomeIcon icon={faPhone} size="lg" /></a>
          <button onClick={handleClick} className="text-gray-800 hover:text-gray-900"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
