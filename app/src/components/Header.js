import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close the menu
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-gray-800 text-white p-2">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-xl font-bold mx-4">Sam Sui</h1>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Navigation Links - Mobile (Hidden by default) */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-10 left-0 w-full bg-gray-800 md:hidden px-4 py-6`}
        >
          <Link to="/" className="block p-3 hover:bg-blue-700 rounded" onClick={closeMenu}>About</Link>
          <Link to="/projects" className="block p-3 hover:bg-blue-700 rounded" onClick={closeMenu}>Projects</Link>
          <Link to="/experiences" className="block p-3 hover:bg-blue-700 rounded" onClick={closeMenu}>Experiences</Link>
          <Link to="/skills" className="block p-3 hover:bg-blue-700 rounded" onClick={closeMenu}>Skills</Link>
        </div>

        {/* Navigation Links - Desktop (Visible) */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="inline-block p-2 hover:bg-blue-700 rounded">About</Link>
          <Link to="/projects" className="inline-block p-2 hover:bg-blue-700 rounded">Projects</Link>
          <Link to="/experiences" className="inline-block p-2 hover:bg-blue-700 rounded">Experiences</Link>
          <Link to="/skills" className="inline-block p-2 hover:bg-blue-700 rounded">Skills</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
