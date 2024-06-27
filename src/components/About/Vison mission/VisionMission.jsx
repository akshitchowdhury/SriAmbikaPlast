import React, { useState } from 'react';
import vision from '../../../assets/vision.png';
import mission from '../../../assets/mission.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const VisionMission = () => {
  // Initialize state for background colors
  const [visionBgColor, setVisionBgColor] = useState('bg-white');
  const [visionTextColor, setVisionTextColor] = useState('text-gray-600');
  const [missionBgColor, setMissionBgColor] = useState('bg-amber-400');
  const [missionTextColor, setMissionTextColor] = useState('text-white');

  // Function to swap colors on hover
  const handleVisionHover = () => {
    setVisionBgColor('bg-amber-400');
    setVisionTextColor('text-white');
    setMissionBgColor('bg-white');
    setMissionTextColor('text-gray-600');
  };

  const handleMissionHover = () => {
    setVisionBgColor('bg-amber-400');
    setVisionTextColor('text-white');
    setMissionBgColor('bg-white');
    setMissionTextColor('text-gray-600');
  };

  const handleHoverLeave = () => {
    setVisionBgColor('bg-white');
    setVisionTextColor('text-gray-600');
    setMissionBgColor('bg-amber-400');
    setMissionTextColor('text-white');
  };

  return (
    <div
    data-aos="fade-up" className="flex flex-col md:flex-row items-center justify-center p-6 md:p-14 space-y-10 md:space-y-0 md:space-x-10">
      {/* Vision Section */}
      <div
        className={`flex flex-col items-center ${visionBgColor} p-6 md:p-10 rounded-md shadow-md w-full md:w-1/2 space-y-6 transition-colors duration-300`}
        onMouseEnter={handleMissionHover}
        onMouseLeave={handleHoverLeave}
      >
        <img
          src={vision}
          alt="Vision Logo"
          className="w-24 h-24"
        />
        <h2 className={`text-2xl md:text-3xl font-semibold text-purple-700 ${visionTextColor} transition-colors duration-300`}>Our Vision</h2>
        <p className={`text-left ${visionTextColor} transition-colors duration-300`}>
          Our vision is to revolutionize the manufacturing industry by delivering innovative, high-quality products that exceed customer expectations. We strive to foster sustainable growth and create lasting value for our stakeholders through continuous improvement and technological advancements.
        </p>
      </div>

      {/* Mission Section */}
      <div
        className={`flex flex-col items-center ${missionBgColor} p-6 md:p-10 rounded-md shadow-md w-full md:w-1/2 space-y-6 transition-colors duration-300`}
        onMouseEnter={handleVisionHover}
        onMouseLeave={handleHoverLeave}
      >
        <img
          src={mission}
          alt="Mission Logo"
          className="w-24 h-24"
        />
        <h2 className={`text-2xl md:text-3xl font-semibold ${missionTextColor} transition-colors duration-300`}>Our Mission</h2>
        <p className={`text-left ${missionTextColor} transition-colors duration-300`}>
          Our mission is to provide unparalleled customer satisfaction by offering superior products and services. We are committed to ethical business practices, sustainable development, and continuous innovation to meet the evolving needs of our customers and contribute positively to the community.
        </p>
      </div>
    </div>
  );
};

export default VisionMission;
