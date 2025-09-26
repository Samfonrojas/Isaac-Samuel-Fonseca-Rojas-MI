
import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon } from './IconComponents';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-light mt-12">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <p className="text-lg font-semibold">Our Mission Field</p>
            <p className="text-sm text-gray-400">Sharing hope, one story at a time.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-brand-accent transition duration-300">
              <FacebookIcon className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-brand-accent transition duration-300">
              <TwitterIcon className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-brand-accent transition duration-300">
              <InstagramIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Our Mission Field. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
