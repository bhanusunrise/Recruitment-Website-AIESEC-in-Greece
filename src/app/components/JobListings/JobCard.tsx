import React, { useState } from 'react';
import { Building, MapPin, Clock, ChevronDown } from 'lucide-react';
import BulletList from './BulletList';
import { JobCardProps } from '../../types';
import Link from 'next/link';

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
      <div className="h-2 bg-blue-500"></div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-700">{job.title}</h3>
        <div className="flex items-center text-blue-500 font-medium mb-2">
          <Building size={16} className="mr-2" />
          {job.company}
        </div>
        <div className="text-sm text-gray-500 mb-3">
          <div>Sub-function: {job.sub_function}</div>
          <div>Reporting to: {job.reporting_to}</div>
        </div>
        <p className="text-gray-600 mb-4">{job.description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="flex items-center mr-4">
            <MapPin size={14} className="mr-1 text-blue-500" />
            {job.location}
          </span>
          <span className="flex items-center">
            <Clock size={14} className="mr-1 text-blue-500" />
            {job.type}
          </span>
        </div>
        
        <button 
          className="flex items-center justify-between w-full text-blue-500 border border-blue-500 rounded px-4 py-2 mb-4 hover:bg-blue-50 transition-colors"
          onClick={() => setExpanded(!expanded)}
        >
          <span>{expanded ? "View Less" : "View Details"}</span>
          <ChevronDown 
            size={18} 
            className={`transition-transform ${expanded ? "transform rotate-180" : ""}`} 
          />
        </button>
        
        {expanded && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <BulletList items={job.responsibilities} title="Responsibilities" />
            <BulletList items={job.requirements} title="Requirements" />
            <BulletList items={job.benefits} title="Benefits" />
          </div>
        )}
        
        <Link 
          href={`/apply?job=${job.id}`}
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 rounded-md font-medium transition-colors"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default JobCard;