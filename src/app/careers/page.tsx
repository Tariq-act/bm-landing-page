import Careers from '@/components/Careers';
import React from 'react';

const CareersPage = () => {
  return (
    <div className='p-4 md:p-8'>
      <h1 className='text-center text-4xl font-bold text-primary'>Careers</h1>
      <div className='w-full md:w-4/5 mx-auto mt-2 md:mt-4'>
        <div className='flex flex-col gap-2 md:gap-4'>
          <h2 className=' text-2xl font-bold text-primary'>We’re Hiring!</h2>
          <h1 className=' text-3xl font-bold text-primary'>
            Be Part of Our Team
          </h1>
          <p className='w-3/5'>
            We’re Looking For Passionate People to join in our Team. We Value
            Flat Hierarchies, Clear Communication, and full Ownership and
            responsibility.
          </p>

          <Careers />
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
