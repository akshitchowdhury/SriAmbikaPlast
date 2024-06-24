import React from 'react'

const HomeContact = () => {
  return (
    
          <div className="ContactForm flex-1 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">Let's Connect</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-left text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-4 py-2 bg-white bg-opacity-20 text-white border border-transparent rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
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
              <div className="flex-1">
                <label htmlFor="phone" className="block text-sm font-medium text-white">
                  Phone
                </label>
                <input
                  type="number"
                  id="phone"
                  className="mt-1 block w-full px-4 py-2 bg-white bg-opacity-20 text-white border border-transparent rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Your Phone"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white text-left">
                Comments 
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
                className="w-[200px] py-3 px-4 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              >
                Contact Us
              </button>
            </div>
          </form>
        </div>      
    
  )
}

export default HomeContact
