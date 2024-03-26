import React from 'react';
import { motion } from 'framer-motion';
import toolsData from '../data/tools.json';

const SkillsGrid = () => {
  // Define initial and animate states for the animation
  const cardVariants = {
    offscreen: { opacity: 0, y: 20 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        // Customize these values as needed
        type: "spring",
        stiffness: 100,
        duration: 0.5
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {toolsData.map((skill, index) => (
          <motion.div 
            key={index} 
            className="border rounded-lg overflow-hidden shadow-lg flex items-center p-4"
            variants={cardVariants} 
            initial="offscreen" 
            whileInView="onscreen" 
            viewport={{ once: true, amount: 0.5 }}
          >
            <img src={skill.image} alt={skill.name} className="w-24 h-24 object-contain mr-4" />
            <div>
              <h3 className="font-bold text-xl">{skill.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;
