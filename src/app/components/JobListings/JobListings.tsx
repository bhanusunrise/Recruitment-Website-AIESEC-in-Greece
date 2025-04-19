import React from 'react';
import JobCard from './JobCard';
import NoJobs from './NoJobs';
import { JobListingsProps } from '../../types';

const JobListings: React.FC<JobListingsProps> = ({ jobs }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 text-gray-700">Available Positions</h2>
          <p className="text-lg text-gray-500">Explore our current opportunities and find your perfect role</p>
        </div>
        
        {jobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <NoJobs />
        )}
      </div>
    </section>
  );
};

export default JobListings;