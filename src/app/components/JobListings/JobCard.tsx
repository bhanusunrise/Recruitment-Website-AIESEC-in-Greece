import React, { useState } from 'react';
import { Building, MapPin, Clock, ChevronDown } from 'lucide-react';
import BulletList from './BulletList';
import { JobCardProps } from '../../types';
import Link from 'next/link';

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`relative bg-white shadow-md hover:shadow-lg overflow-visible ${expanded ? '' : 'rounded-lg'}`}>
      {/* Header */}
      <div className="h-2 bg-blue-500 rounded-t-lg"></div>
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
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="flex items-center justify-between w-full text-blue-500 border border-blue-500 rounded px-4 py-2 hover:bg-blue-50 transition-colors"
        >
          <span>{expanded ? 'View Less' : 'View Details'}</span>
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
        <Link href={`/job/${job.id}`}>
          <span className="block text-center text-blue-500 font-semibold mt-4 hover:underline">
            Apply Now
          </span>
        </Link>
      </div>

      {/* Animated details panel - absolutely positioned so it doesn't affect grid row height */}
      <div
        className="absolute left-0 w-full bg-white rounded-b-lg border-t border-gray-100 shadow-md overflow-hidden transition-transform duration-300 ease-in-out z-10"
        style={{
          top: '100%',
          transformOrigin: 'top',
          transform: expanded ? 'scaleY(1)' : 'scaleY(0)',
        }}
      >
        <div className="p-6">
          <BulletList items={job.responsibilities} title="Responsibilities" />
          <BulletList items={job.requirements} title="Requirements" />
          <BulletList items={job.benefits} title="Benefits" />
        </div>
      </div>
    </div>
  );
};

export default JobCard;