'use client';

import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchSection from './components/SearchSection';
import JobListings from './components/JobListings/JobListings';
import Footer from './components/Footer';
import { initialJobs } from './data/jobData';
import { Job } from './types';

const Home: NextPage = () => {
  const [jobs] = useState<Job[]>(initialJobs);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(initialJobs);
  
  const handleSearch = (searchTerm: string, locationTerm: string): void => {
    const term = searchTerm.toLowerCase();
    const location = locationTerm.toLowerCase();
    
    const filtered = jobs.filter(job => {
      const matchesSearch = !term || 
        job.title.toLowerCase().includes(term) || 
        job.description.toLowerCase().includes(term) ||
        job.company.toLowerCase().includes(term) ||
        job.sub_function.toLowerCase().includes(term) ||
        job.reporting_to.toLowerCase().includes(term) ||
        job.responsibilities.some(resp => resp.toLowerCase().includes(term)) ||
        job.requirements.some(req => req.toLowerCase().includes(term)) ||
        job.benefits.some(ben => ben.toLowerCase().includes(term));
      
      const matchesLocation = !location || 
        job.location.toLowerCase().includes(location);
      
      return matchesSearch && matchesLocation;
    });
    
    setFilteredJobs(filtered);
  };
  
  return (
    <>
      <Head>
        <title>AIESEC Greece | Job Board</title>
        <meta name="description" content="Join AIESEC Greece teams and make a global impact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <SearchSection onSearch={handleSearch} />
          <JobListings jobs={filteredJobs} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;