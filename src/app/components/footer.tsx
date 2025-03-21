import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-md">
          Developed by The Marketing Team of the <span className="font-bold">AIESEC in Greece</span>
        </p>
        <a
          href="https://aiesec.gr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          www.aiesec.gr
        </a>
      </div>
    </footer>
  );
};

export default Footer;
