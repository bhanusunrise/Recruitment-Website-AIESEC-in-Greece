import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-md">
          Developed by <span className="font-bold">Pasindu Bhanuka</span>
        </p>
        <a
          href="https://www.pasindubhanuka.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          www.pasindubhanuka.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
