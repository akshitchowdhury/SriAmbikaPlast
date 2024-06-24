import React from 'react'

const ContactForm = () => {
  return (
    <div className="left w-full md:w-1/2 p-6 md:p-10 rounded-md bg-orange-500  flex flex-col space-y-6">
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
          <div className='flex flex-row gap-28'>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-white mb-2">Phone</label>
            <input type="number" id="phone" name="phone" className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-white mb-2">Message</label>
            <input type='text' name="message"  className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" required/>
          </div>
          </div>
          <button type="submit" className="p-3 rounded-md bg-white text-purple-700 font-semibold hover:bg-amber-400 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500">
            Submit
          </button>
        </form>
      </div>
  )
}

export default ContactForm
