import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ExperienceAccordion = ({ title, company, logo, duration, location, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Define the animation variants
  const variants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <motion.div
      className="border-b border-gray-200"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 focus:outline-none flex items-start"
      >
        {logo && (
          <img src={logo} alt={`${company} logo`} className="mr-4 w-16 h-16 rounded-full object-contain" />
        )}
        <div className="flex-grow">
          <h2 className="text-lg font-semibold text-left">{title}<span className='text-sm text-gray-500 px-3'>{company}</span></h2>
          <div className="flex justify-between items-center w-full">
            <p className="text-sm text-gray-500">{duration} | {location}</p>  
          </div>
        </div>
        <span className="ml-4 flex-shrink-0 self-center">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-5 pt-2 pb-5">
          <ul className="list-disc pl-5 space-y-2">
            {Array.isArray(description) ? description.map((item, index) => (
              <li key={index}>{item}</li>
            )) : <p>{description}</p>}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default ExperienceAccordion;
