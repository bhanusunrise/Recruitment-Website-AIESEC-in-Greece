import React, { useState, KeyboardEvent } from 'react';
import { Search, MapPin } from 'lucide-react';
import { SearchProps } from '../types';

const SearchSection: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [locationTerm, setLocationTerm] = useState<string>('');
  
  const handleSearch = (): void => {
    onSearch(searchTerm, locationTerm);
  };
  
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  
  return (
    <div className="container mx-auto max-w-6xl px-4">
      <div className="bg-white rounded-lg shadow-md p-4 md:p-6 -mt-8 relative z-10 max-w-3xl mx-auto">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px] relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Search for positions..."
              className="w-full py-3 pl-10 pr-3 border border-gray-200 rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className="flex-1 min-w-[200px] relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Location"
              className="w-full py-3 pl-10 pr-3 border border-gray-200 rounded-md"
              value={locationTerm}
              onChange={(e) => setLocationTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md font-medium transition-colors"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;