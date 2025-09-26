
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GlobeAltIcon, MenuIcon, XIcon } from './IconComponents';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses = "text-white hover:text-brand-accent transition duration-300";
  const activeLinkClasses = "text-brand-accent font-semibold";

  return (
    <header className="bg-brand-primary shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <GlobeAltIcon className="h-8 w-8 text-brand-accent" />
          <h1 className="text-2xl font-bold text-white">Our Mission Field</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={({ isActive }) => isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses}>
            Home
          </NavLink>
          <NavLink to="/trips" className={({ isActive }) => isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses}>
            Mission Trips
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-secondary">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses}>
              Home
            </NavLink>
            <NavLink to="/trips" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses}>
              Mission Trips
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
