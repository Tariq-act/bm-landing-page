'use client';
import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination';
import Link from 'next/link';

const jobs = [
  {
    id: 1,
    title: 'Operations Executive',
    jobID: '20035566',
    location: 'Hyderabad',
    posted: '21/04/2024',
    experience: '1-3 Years',
  },
  {
    id: 2,
    title: 'Technical Lead',
    jobID: '20035567',
    location: 'Hyderabad',
    posted: '21/04/2024',
    experience: '1-3 Years',
  },
  {
    id: 3,
    title: 'HR Intern (2)',
    jobID: '20035568',
    location: 'Hyderabad',
    posted: '21/04/2024',
    experience: '1-3 Years',
  },
  {
    id: 4,
    title: 'Flutter Developer',
    jobID: '20035569',
    location: 'Hyderabad',
    posted: '21/04/2024',
    experience: '1-3 Years',
  },
  {
    id: 5,
    title: 'Technical Lead',
    jobID: '20035569',
    location: 'Hyderabad',
    posted: '21/04/2024',
    experience: '1-3 Years',
  },
  {
    id: 6,
    title: 'Operations Manager',
    jobID: '20035569',
    location: 'Hyderabad',
    posted: '21/04/2024',
    experience: '1-3 Years',
  },
  {
    id: 7,
    title: 'Technical Lead',
    jobID: '20035569',
    location: 'Hyderabad',
    posted: '21/04/2024',
    experience: '1-3 Years',
  },
];

const ITEMS_PER_PAGE = 5;

const Careers = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(
    Math.ceil(jobs.length / ITEMS_PER_PAGE)
  );

  useEffect(() => {
    setTotalPages(Math.ceil(jobs.length / ITEMS_PER_PAGE));
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getPaginatedJobs = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return jobs.slice(startIndex, endIndex);
  };

  return (
    <div>
      <div className='grid grid-cols-1 gap-4 border shadow-md rounded-lg'>
        {getPaginatedJobs().map((item) => (
          <div key={item.id} className='border-b '>
            <div className='p-6 flex flex-col md:items-center md:flex-row gap-3 md:justify-evenly'>
              <div>
                <h3 className='text-primary font-semibold'>{item.title}</h3>
                <p className='text-[#76767E] text-xs font-semibold'>
                  {' '}
                  Job ID: {item.jobID}
                </p>
              </div>
              <div>
                <h3 className='text-[#76767E] text-xs'>Location</h3>
                <p> {item.location}</p>
              </div>
              <div>
                <h3 className='text-[#76767E] text-xs'>Posted</h3>
                <p> {item.posted}</p>
              </div>
              <div>
                <h3 className='text-[#76767E] text-xs'>Experience</h3>
                <p> {item.experience}</p>
              </div>
              <div>
                <Link href={`/careers/${item.jobID}`}>
                  <button className='bg-primary p-1 px-4 text-white rounded-full'>
                    Apply
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Careers;
