import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-2">
      <nav className="container mx-auto flex justify-between items-center">
      <Link to="/"><h1 className="text-xl font-bold">Sam Sui</h1></Link>
          <div>
            <Link to="/" className='inline-block p-2 hover:bg-blue-700 rounded'>About</Link>
            <Link to="/projects" className='inline-block p-2 hover:bg-blue-700 rounded'>Projects</Link>
            <Link to="/experiences" className='inline-block p-2 hover:bg-blue-700 rounded'>Experiences</Link>
            <Link to="/skills" className='inline-block p-2 hover:bg-blue-700 rounded'>Skills</Link>
          </div>
      </nav>
    </header>
  );
}

export default Header;
