import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function AboutMasthead() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="space-y-4"
      >
        <h1 className="text-5xl md:text-5xl font-bold">
          Hi. My name is Sam.
        </h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold"
        >
          I am a Software Engineer.
        </motion.h2>
      </motion.div>

      <div className="mt-16 text-left max-w-4xl">
        <motion.p
          className="text-2xl text-gray-700 mb-6 space-y-2 list-disc list-inside font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.4 }}
        >
          As a software engineer, I am passionate about:
        </motion.p>
        <motion.ul
          className="text-xl text-gray-700 mb-6 space-y-2 list-disc list-inside"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.4 }}
        >
          <li>Developing scalable web applications and enhancing user experiences</li>
          <li>Bridging the gap between technical functionality and aesthetic appeal</li>
          <li>Leveraging a wide variety of technologies to solve problems and create solutions</li>
        </motion.ul>
        <motion.p
          className="text-2xl text-gray-700 mb-6 space-y-2 list-disc list-inside mt-8 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.6 }}
        >
          Get to know more about my journey in the tech world:
        </motion.p>
        <motion.ul
          className="text-xl text-gray-700 mb-6 space-y-2 list-disc list-inside"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.6 }}
        >
          <li>
            Dive into my portfolio to see the <Link to="/projects" className="text-blue-500 hover:text-blue-700">projects</Link> I've brought to life
          </li>
          <li>
            Explore the <Link to="/skills" className="text-blue-500 hover:text-blue-700">skills</Link> I've honed over time
          </li>
          <li>
            Learn about my previous <Link to="/experiences" className="text-blue-500 hover:text-blue-700">experiences</Link>
          </li>
        </motion.ul>
      </div>
    </div>
  );
}

export default AboutMasthead;
