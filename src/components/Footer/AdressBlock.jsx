import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import footerLogo from "../../assets/logo2.png"
const AdressBlock = () => {
  return (
    <>
    <div className="address md:col-span-1 mb-6 md:mb-0 md:mr-4 text-left">
    
      <h2 className="mb-6 text-sm font-semibold text-white uppercase">
        Address
      </h2>
      <p className="text-white font-medium mb-4">
      <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-white" />
      <span> No.20, 15th Cross, Malagala Main Road, Nagarabhavi 2nd Stage, Bengaluru-560091</span>
      </p>
      <p className="text-white text-sm font-medium">
      <FontAwesomeIcon icon={faPhone} className="mr-2 text-white" />
      <span>
        Phone: +91 9448539183 / +91 9845511324
        </span>
        <br />
        <br />
        <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-white" />
      <span>
        Email: seraramsolanki@gmail.com
        </span>
      </p>
    </div>
    
    
    </>
  );
};

export default AdressBlock;
