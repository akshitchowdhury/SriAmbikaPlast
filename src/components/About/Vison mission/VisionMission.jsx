import React from 'react';

import vision from '../../../assets/vision.jpg'
import mission from '../../../assets/mission.png'
const VisionMission = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-14 space-y-10 md:space-y-0 md:space-x-10">
      {/* Vision Section */}
      <div className="flex flex-col items-center bg-white p-6 md:p-10 rounded-md shadow-md w-full md:w-1/2 space-y-6">
        <img
          src={vision} // Replace with actual logo path
          alt="Vision Logo"
          className="w-24 h-24"
        />
        <h2 className="text-2xl md:text-3xl font-semibold text-purple-700">Our Vision</h2>
        <p className="text-gray-600 text-left">
          Our vision is to revolutionize the manufacturing industry by delivering innovative, high-quality products that exceed customer expectations. We strive to foster sustainable growth and create lasting value for our stakeholders through continuous improvement and technological advancements.
        </p>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col items-center bg-amber-400 p-6 md:p-10 rounded-md shadow-md w-full md:w-1/2 space-y-6">
        <img
          src={mission} // Replace with actual logo path
          alt="Mission Logo"
          className="w-24 h-24"
        />
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Our Mission</h2>
        <p className="text-gray-600 text-left">
          Our mission is to provide unparalleled customer satisfaction by offering superior products and services. We are committed to ethical business practices, sustainable development, and continuous innovation to meet the evolving needs of our customers and contribute positively to the community.
        </p>
      </div>
    </div>
  );
};

export default VisionMission;
