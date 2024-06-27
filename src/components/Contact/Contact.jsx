import React from 'react';
import './Contact.css';
import ContactForm from './ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Contact = () => {
  return (
    <>
    <div data-aos="fade-up" className="contact h-auto md:h-auto flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0 p-6 md:p-14">
      {/* Left section with Contact Form */}
      <ContactForm/>
      
      {/* Right section */}
      <div className="right w-full md:w-1/2 p-4 space-y-4">
        {/* Top div with background image */}
        <div className="rtop w-full h-48 md:h-72 bg-cover bg-center rounded-md bg-sky-700 bg-opacity-50"
             style={{ backgroundBlendMode: 'multiply', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>

        {/* Bottom div as an address card */}
        <div className="w-full p-6 h-auto md:h-auto bg-white shadow-md rounded-md border border-gray-300 text-left">
    <h2 className="text-lg font-semibold mb-2">Address</h2>
    <p className="mb-2">
      <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-orange-500" />
      <span>No.20, 15th Cross, Malagala Main Road</span>
    </p>
    <p className="mb-2">
      <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-white" />
      <span>Nagarabhavi 2nd Stage</span>
    </p>
    <p className="mb-2">
      <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-white" />
      <span>Bengaluru-560091</span>
    </p>
    <p className="mb-2">
      <FontAwesomeIcon icon={faPhone} className="mr-2 text-orange-500" />
      <span>Phone: +91 9448539183 / +91 9845511324</span>
    </p>
    <p>
      <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-orange-500" />
      <span>Email: seraramsolanki@gmail.com</span>
    </p>
  </div>
      </div>
      
    </div>
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.942406986801!2d77.5116481750765!3d12.97553548734019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3c3296cc28ff%3A0x1a45ef7cde68296e!2s16%2C%2015th%20Cross%20Rd%2C%20Nagarbhavi%20Second%20Stage%2C%20Malagala%2C%20Krishnananda%20Nagar%2C%20Naagarabhaavi%2C%20Bengaluru%2C%20Karnataka%20560072!5e0!3m2!1sen!2sin!4v1719314044310!5m2!1sen!2sin"
        width="1600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Embed"
      ></iframe>
      </div>
      </>
  );
};

export default Contact;
