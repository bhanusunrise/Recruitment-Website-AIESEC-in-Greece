import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

type SocialIcon = typeof Facebook | typeof Twitter | typeof Instagram | typeof Linkedin;

const Footer: React.FC = () => {
  const socialIcons: SocialIcon[] = [Facebook, Twitter, Instagram, Linkedin];
  const quickLinks: string[] = ['Home', 'About Us', 'Our Teams', 'Join Us', 'Contact'];
  const programs: string[] = ['Global Volunteer', 'Global Talent', 'Global Entrepreneur', 'Youth 4 Impact'];
  
  return (
    <footer className="bg-gray-700 text-white pt-16 pb-6">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">AIESEC Greece</h3>
            <p className="mb-4">Empowering young people for positive impact through leadership development experiences.</p>
            <div className="flex space-x-4">
              {socialIcons.map((Icon, index) => (
                <Link 
                  key={index} 
                  href="#" 
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white bg-opacity-10 hover:bg-blue-500 transition-colors"
                >
                  <Icon size={18} className="text-white" />
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              {quickLinks.map((item, index) => (
                <li key={index} className="mb-2">
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Programs</h3>
            <ul>
              {programs.map((item, index) => (
                <li key={index} className="mb-2">
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul>
              <li className="mb-2 flex items-center">
                <MapPin size={16} className="mr-2" /> Athens, Greece
              </li>
              <li className="mb-2 flex items-center">
                <Mail size={16} className="mr-2" /> info@aiesec.gr
              </li>
              <li className="mb-2 flex items-center">
                <Phone size={16} className="mr-2" /> +30 210 1234567
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-white border-opacity-10 text-center text-gray-300 text-sm">
          <p>&copy; 2025 AIESEC in Greece. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;