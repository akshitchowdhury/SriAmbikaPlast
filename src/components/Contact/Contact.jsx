import React from 'react';
import './Contact.css';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="contact h-auto md:h-auto flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0 p-6 md:p-14">
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
          <p className="mb-2">No.20, 15th Cross, Malagala Main Road</p>
          <p className="mb-2">Nagarabhavi 2nd Stage</p>
          <p className="mb-2">Bengaluru-560091</p>
          <p className="mb-2">Phone: +91 9448539183 / +91 9845511324</p>
          <p>Email: seraramsolanki@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
