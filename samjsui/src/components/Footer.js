import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 text-center flex justify-center items-center space-x-4">
      {/* Email */}
      <a href="mailto:ssui@vols.utk.edu" aria-label="Email" className="hover:text-gray-400">
        <FaEnvelope size={40} />
      </a>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/samuelsui" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gray-400">
        <FaLinkedin size={40} />
      </a>

      {/* GitHub */}
      <a href="https://github.com/SamJSui" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-400">
        <FaGithub size={40} />
      </a>
    </footer>
  );
}

export default Footer;
