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
          {/* Logo & Title */}
          <div className="flex items-center">
            <div className="relative mr-3 h-10 w-24">
              <Image
                src="/api/placeholder/120/40"
                alt="AIESEC Logo"
                fill
                sizes="(max-width: 768px) 100vw, 120px"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h1 className="text-xl font-semibold text-blue-500">AIESEC in Greece</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center">
            <ul className="flex space-x-6">
              {['Home', 'About', 'Teams', 'Contact', 'Admin'].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`}
                    className={`py-4 px-6 border-b-2 ${
                      index === 0
                        ? 'text-blue-500 border-blue-500'
                        : 'text-gray-700 border-transparent hover:text-blue-500 hover:border-blue-500'
                    } font-medium`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Hamburger Icon */}
          <button
            className="md:hidden text-blue-500 text-2xl"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col">
            {['Home', 'About', 'Teams', 'Contact', 'Admin'].map((item, index) => (
              <li key={index}>
                <Link
                  href={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`}
                  className={`block py-4 px-6 border-b border-gray-100 text-gray-700 hover:text-blue-500 font-medium ${
                    index === 0 ? 'text-blue-500' : ''
                  }`}
                  // Optionally close the menu when a link is clicked
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;