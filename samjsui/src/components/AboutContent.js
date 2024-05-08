import React from 'react';
import { motion } from 'framer-motion';

const AboutContent = () => {
  const variants = {
    offscreen: { opacity: 0, y: 20 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <div className='text-left px-4 sm:px-12 mx-2 sm:mx-12'>
      <motion.section
        className="my-2 sm:my-4 mx-2 sm:mx-12"
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center py-4">What Drives Me</h1>
        <p className="text-lg">I realized the essence of being an engineer is: <strong>solving problems.</strong> Many developers nowadays are too focused on concepts, rather than building them into fruition. I enjoy working on projects that combine modern tech stacks and personal interests - something I can use or has a piece of <strong>me.</strong></p>
      </motion.section>
      <motion.section
        className="my-2 sm:my-4 mx-2 sm:mx-12"
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center py-4">Future Aspirations</h1>
        <p className="text-lg">My goal is to work with a team that is also passionate about creating innovative solutions to real-world problems.</p>
        <p className="text-lg">My true passion within this field is to create user-facing products that I can show off to my friends and colleagues, being able to say - <strong>I made that.</strong> This pushes me to always innovate and iterate with the end user in mind, impacting them directly.</p>
      </motion.section>
      <motion.section
        className="my-2 sm:my-4 mx-2 sm:mx-12"
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center py-4">In My Free Time</h1>
        <p className="text-lg">
          While I am not coding or working on a project, I enjoy rock climbing and spending time with friends! I also love trying new foods and exploring new places!
        </p>
      </motion.section>
      <motion.section
        className="my-2 sm:my-4 mx-2 sm:mx-12"
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center py-4">Let's Connect</h1>
        <p className="text-lg">
          Feel free to reach out, so we can explore and work on something cool together! Connect with me on
          <a href="https://linkedin.com/in/samuelsui" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"> LinkedIn </a> 
          or shoot me an <a href="mailto:ssui@vols.utk.edu" className="text-blue-500 hover:text-blue-700"> email</a>!
        </p>
      </motion.section>
    </div>
  );
};

export default AboutContent;
