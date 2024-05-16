import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ExperienceAccordion = ({ title, company, logo, duration, location, description }) => {
  const [isOpen, setIsOpen] = useState(false);

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
        className="w-full p-5 focus:outline-none flex justify-between items-start"
        aria-expanded={isOpen}
      >
        <div className="flex items-center space-x-4">
          {logo && (
            <img src={logo} alt={`${company} logo`} className="w-16 h-16 rounded-full object-contain" />
          )}
          <div className="flex-grow flex flex-col text-left">
            <h2 className="text-lg font-semibold">{title}</h2>
            <div className="text-sm text-gray-500">
              <span>{company}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-sm text-gray-500">{duration}</p>
          <p className="text-sm text-gray-500">{location}</p>
          <span className="text-lg">{isOpen ? '-' : '+'}</span>
        </div>
      </button>
      {isOpen && (
        <div className="px-5 pt-2 pb-5" aria-hidden={!isOpen}>
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
