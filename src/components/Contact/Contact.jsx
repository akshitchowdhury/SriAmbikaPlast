import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact h-auto md:h-auto flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0 p-6 md:p-14">
      {/* Left section with Contact Form */}
      <div className="left w-full md:w-1/2 p-6 md:p-10 rounded-md bg-amber-400 bg-opacity-50 flex flex-col space-y-6">
        <h2 className="text-lg md:text-3xl text-white font-medium">Get in Touch</h2>
        <form className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white mb-2">Name</label>
            <input type="text" id="name" name="name" className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white mb-2">Email</label>
            <input type="email" id="email" name="email" className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-white mb-2">Message</label>
            <textarea id="message" name="message" rows="5" className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" required></textarea>
          </div>
          <button type="submit" className="p-3 rounded-md bg-white text-purple-700 font-semibold hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500">
            Submit
          </button>
        </form>
      </div>
      
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
