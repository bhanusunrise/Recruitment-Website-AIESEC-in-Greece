import React from 'react';
import { Search } from 'lucide-react';

const NoJobs: React.FC = () => {
  return (
    <div className="text-center py-16">
      <Search size={48} className="mx-auto mb-4 text-gray-300" />
      <h3 className="text-2xl font-semibold mb-2 text-gray-700">No jobs found</h3>
      <p className="text-gray-500">Try adjusting your search criteria</p>
    </div>
  );
};

export default NoJobs;