'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const features = [
  {
    name: 'Loan Process',
    description:
      'Tired of complex loan processes? Fear not! We simplify the journey for you, ensuring transparency at every step for your peace of mind.',
    image: '/images/feature/loanProcess.svg',
  },
  {
    name: 'Financial Doctor',
    description: `Experience Clear Solutions to Your Financial Queries with Our On-Ground Masters. As our Network Grows, Bringing Top-notch Experts from Banks and NBFC's Closer to Solve Your Financial Challenges.`,
    image: '/images/feature/financialDoctor.svg',
  },
  {
    name: 'My Tracker',
    description: `Centralize Your Loans at our MYLocker for Timely Payments, reduced Maintenance & Boosting Your Cibil Score.`,
    image: '/images/feature/tracker.svg',
  },
  {
    name: 'Drive In',
    description: `Revolutionize your finance game with our app's real-time insights on loans, interest rates, credit cards, and CIBIL matters. Stay confident, stay informed!.`,
    image: '/images/feature/driveInn.svg',
  },
  {
    name: 'Loan Eligibility tool',
    description: `Revolutionize your loan selection with our cutting-edge Loan Eligibility Master Tool. Elevate your financial decisions instantly and confidently. Unleash the power of tailored loan options at your fingertips.`,
    image: '/images/feature/LoanEligibility.svg',
  },
];

const OurUsps = () => {
  const [selectedFeature, setSelectedFeature] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const handleFeatureClick = (index: number) => {
    if (index !== selectedFeature) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedFeature(index);
        setIsTransitioning(false);
      }, 200);
    }
  };

  useEffect(() => {
    features.forEach((feature) => {
      const img = new window.Image();
      img.src = feature.image;
    });
  }, []);

  return (
    <div
      id='ourUps'
      className='w-full mx-auto mt-10 md:mt-32 flex flex-col lg:flex-row text-white'
    >
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

      <div className='bg-primary lg:w-3/5 flex flex-col items-center justify-center md:justify-start gap-5 md:gap-32 lg:gap-32 md:px-10 py-8'>
        <div className='flex items-center justify-center md:justify-start gap-10 md:gap-32 lg:gap-32 px-5 md:px-10'>
          <ul className='flex flex-col gap-2'>
            {features.map((feature, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  selectedFeature === index ? 'text-secondary' : ''
                }`}
                onClick={() => handleFeatureClick(index)}
              >
                {feature.name}
              </li>
            ))}
          </ul>

          <div className='flex items-center gap-3'>
            <div
              className={`transition-opacity transform duration-500 ${
                isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              <Image
                src={features[selectedFeature].image}
                width={160}
                height={160}
                loading='lazy'
                alt={features[selectedFeature].name}
              />
            </div>

            <div
              className={`w-56 border rounded-xl p-3 hidden md:block transition-opacity transform duration-500 ${
                isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              <h1 className='font-semibold md:text-2xl mb-2'>
                {features[selectedFeature].name}
              </h1>
              <p className='text-sm'>{features[selectedFeature].description}</p>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden w-56 border rounded-xl p-3 transition-opacity transform duration-500 ${
            isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          <h1 className='font-semibold md:text-2xl mb-2'>
            {features[selectedFeature].name}
          </h1>
          <p className='text-sm'>{features[selectedFeature].description}</p>
        </div>
      </div>
    </div>
  );
};

export default OurUsps;
