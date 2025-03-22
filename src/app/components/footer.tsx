import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-500 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-md">
          Developed by - Marketing Team of <span className="font-bold">AIESEC in Greece</span>
        </p>
        <a
          href="https://aiesec.gr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-200 hover:underline"
        >
          www.aiesec.gr
        </a>
      </div>
    </footer>
  );
};

export default Footer;
