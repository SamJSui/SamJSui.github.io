import React from 'react';
import { motion } from 'framer-motion';
import timelineEvents from '../data/timeline.json';

function Timeline() {
  // Define the animation variants
  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <div className="max-w-4xl mx-auto mb-12">
      <h2 className="text-3xl font-bold text-center mt-12">Timeline</h2>
      <div className="border-l-2 border-gray-200">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className="ml-4 mb-8"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="block text-gray-700 font-bold">{event.year}</span>
            <span className="block text-xl text-gray-800 font-semibold mb-1">{event.title}</span>
            <p className="text-gray-700">{event.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
