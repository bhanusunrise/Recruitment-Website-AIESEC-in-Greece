import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  
  const toggleMobileMenu = (): void => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="h-10 w-24 relative mr-3">
              <Image 
                src="/api/placeholder/120/40" 
                alt="AIESEC Logo" 
                fill
                sizes="(max-width: 768px) 100vw, 120px"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h1 className="text-xl font-semibold text-blue-500">AIESEC Greece</h1>
          </div>
          
          <button 
            className="md:hidden text-blue-500 text-2xl"
            onClick={toggleMobileMenu}
          >
            <Menu size={24} />
          </button>
          
          <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-50`}>
            <ul className="flex flex-col md:flex-row">
              {['Home', 'About', 'Teams', 'Contact', 'Admin'].map((item, index) => (
                <li key={index} className="md:ml-6">
                  <Link 
                    href={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`}
                    className={`block py-4 px-6 md:p-0 border-b md:border-0 border-gray-100 text-gray-700 font-medium hover:text-blue-500 ${index === 0 ? 'text-blue-500' : ''}`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;