'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const OurUsps = () => {
  const [selectedFeature, setSelectedFeature] = useState<number>(0);
  const images = [
    'images/feature/tracker.svg',
    'images/feature/financialDoctor.svg',
    'images/feature/tracker.svg',
    'images/feature/driveInn.svg',
    'images/feature/LoanEligibility.svg',
  ];

  // Function to handle click on list items
  const handleFeatureClick = (index: number) => {
    setSelectedFeature(index);
  };

  return (
    <div className='w-full mx-auto mt-10 md:mt-32 flex flex-col lg:flex-row text-white'>
      <div className='bg-secondary lg:w-2/5 px-5 md:px-10 text-center py-5 md:py-10'>
        <div className='flex flex-col gap-4 mb-7'>
          <h1 className='text-3xl font-bold'>Our USPS</h1>
          <h1 className='text-3xl font-bold'>Ways to Grow Together</h1>
        </div>
        <p className='text-left'>
          Our USP lies in the seamless fusion of a user-friendly interface and
          advanced algorithms, meticulously crafted by financial policy masters.
          This dynamic combination guarantees a tailored selection of loan
          options from top banks and NBFCs, saving you not only money but also
          precious time.
        </p>
      </div>

      <div className='bg-primary lg:w-3/5 flex items-center justify-center md:justify-start  gap-10 md:gap-32 lg:gap-32 px-5 md:px-10 py-8'>
        <div>
          <ul className='flex flex-col gap-2'>
            <li
              className={`cursor-pointer ${
                selectedFeature === 0 && 'text-secondary'
              }`}
              onClick={() => handleFeatureClick(0)}
            >
              Loan Process
            </li>
            <li
              className={`cursor-pointer ${
                selectedFeature === 1 && 'text-secondary'
              }`}
              onClick={() => handleFeatureClick(1)}
            >
              Financial Doctor
            </li>
            <li
              className={`cursor-pointer ${
                selectedFeature === 2 && 'text-secondary'
              }`}
              onClick={() => handleFeatureClick(2)}
            >
              My Tracker
            </li>
            <li
              className={`cursor-pointer ${
                selectedFeature === 3 && 'text-secondary'
              }`}
              onClick={() => handleFeatureClick(3)}
            >
              Drive In
            </li>
            <li
              className={`cursor-pointer ${
                selectedFeature === 4 && 'text-secondary'
              }`}
              onClick={() => handleFeatureClick(4)}
            >
              Loan Eligibility tool
            </li>
          </ul>
        </div>
        <div className='flex  items-center gap-3'>
          <div className='transition-all duration-300 ease-in-out'>
            <Image
              src={images[selectedFeature]}
              width={160}
              height={160}
              loading='lazy'
              alt='Feature Image'
            />
          </div>

          <div className='w-56 border rounded-xl p-3 hidden md:block'>
            <h1 className='font-semibold md:text-2xl mb-2'>My Tracker</h1>
            <p className='text-sm'>
              MyLocker centralize loans for timely payments and reduced
              maintenance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurUsps;
