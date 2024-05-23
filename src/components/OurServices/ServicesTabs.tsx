'use client';

import { Check } from '@mui/icons-material';
import Image from 'next/image';
import React, { useState } from 'react';

const tabs = [
  { id: 1, label: 'Personal Loan' },
  { id: 2, label: 'Business Loan' },
  { id: 3, label: 'Working Capital' },
  { id: 4, label: 'Property Loan' },
  { id: 5, label: 'Vehicle Loan' },
  { id: 6, label: 'Education Loan' },
];

const tabContents = [
  {
    id: 1,
    image: '/images/loans/personal_loan.svg',
    title: 'Unlock Financial Freedom: Navigating the World of Personal Loans',
    description:
      'Experience financial freedom without collateral at Bank Master. Your ultimate guide to personal loans, navigate low interest rates, terms, and eligibility confidently. Empower your financial journey today.',
    features: [
      'Unsecured Loans',
      "21 Banks & NBFC's Partners",
      'Credit Facilities',
    ],
  },
  {
    id: 2,
    image: '/images/loans/business_loan.svg',
    title: 'Amplify Business Prosperity: Uncover the Power of Business Loans',
    description:
      'Seize Financial Advantage at Bank Master, Collateral-Free. Your Ultimate Business Loan Guide. Navigate Interest Rates, Terms, and Eligibility with Confidence. Empower Your Business Journey Today.',
    features: [
      'Unsecured Loans',
      "21 Banks & NBFC's Partners",
      'Credit Facilities',
    ],
  },
  {
    id: 3,
    image: '/images/loans/working_capital.svg',
    title: 'Optimize Operations: Navigating the World of Working Capital',
    description:
      'Enhance Financial Agility with Bank Master. Your Comprehensive Guide to Working Capital. Navigate Terms, Interest Rates, and Eligibility with Confidence. Empower Your Business Journey Today.',
    features: [
      'Secured & Unsecured Loans',
      "21 Banks & NBFC's Partners",
      "6 Banks & NBFC's Partners",
      'Credit Facilities',
    ],
  },
  {
    id: 4,
    image: '/images/loans/property_loan.svg',
    title:
      'Transform Dreams into Reality: Explore the World of Property & Mortgage Loans',
    description:
      'Turn Your Property Dreams into Achievements with Bank Master. Your Inspirational Guide to Property & Mortgage Loans, revealing strategies to transform your aspirations into reality. Navigate Interest Rates, Terms, and Eligibility with Confidence. Empower Your Property Journey Today.',
    features: [
      'Purchase & Mortgage Loans',
      "32 Banks & NBFC's Partners",
      "6 Banks & NBFC's Partners",
      'Credit Facilities',
    ],
  },
  {
    id: 5,
    image: '/images/loans/vehicle_loan.svg',
    title: 'Drive Your Dreams: Cruising Through the World of Vehicle Loans',
    description:
      'Turn Your Automotive Dreams into Reality with Bank Master. Your Ultimate Guide to Vehicle Loans, unveiling strategies to make your dream vehicle a reality. Navigate Interest Rates, Terms, and Eligibility with Confidence, Accelerating Your vehicle Journey Today.',
    features: [
      'New & Old Vehicle Loans',
      "8 Banks & NBFC's Partners",
      'Credit Facilities',
    ],
  },
  {
    id: 6,
    image: '/images/loans/education_loan.svg',
    title: 'Level Up Your Skills: Navigating the World of Educational Loans',
    description:
      'Transform Your Academic Dreams into Reality with Bank Master. Your Definitive Guide to Educational Loans, revealing strategies to make your educational goals a reality. Navigate Interest Rates, Terms, and Eligibility with Confidence. Empower Your Educational Journey Today.',
    features: [
      'New & Old Vehicle Loans',
      "8 Banks & NBFC's Partners",
      'Credit Facilities',
    ],
  },
];

const ServicesTabs = ({
  activeTab,
  handleServiceTabs,
}: {
  activeTab: number;
  handleServiceTabs: (index: number) => void;
}) => {
  // const [openTab, setOpenTab] = useState<number>(1);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const activeClasses =
    'border-l border-t border-r rounded-t-lg text-white bg-secondary text-base lg:text-lg tracking-widest';
  const inactiveClasses = 'text-primary hover:text-blue-700';

  const handleTabChange = (tabNumber: number) => {
    if (tabNumber !== activeTab) {
      setIsTransitioning(true);
      setTimeout(() => {
        handleServiceTabs(tabNumber);
        setIsTransitioning(false);
      }, 100); // Transition duration should match the CSS transition duration
    }
  };

  return (
    <div className='p-6 border rounded-md'>
      <ul className='flex flex-wrap justify-center md:justify-start border-b'>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`mr-1 cursor-pointer ${
              activeTab === tab.id ? '-mb-px' : ''
            } transition-all duration-300 ease-in-out`}
          >
            <button
              className={`inline-block py-2 px-4 font-semibold transition-colors duration-300 ease-in-out ${
                activeTab === tab.id ? activeClasses : inactiveClasses
              }`}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div className='w-full mt-4'>
        {tabContents.map((tabContent) => (
          <div
            key={tabContent.id}
            className={`transition-opacity duration-300 ease-in-out ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            } ${
              activeTab === tabContent.id ? 'block' : 'hidden'
            } flex flex-col md:flex-row items-center`}
          >
            <div className='flex-1 lg:flex-auto'>
              <Image
                src={tabContent.image}
                width={500}
                height={500}
                alt={tabContent.title}
                loading='lazy'
              />
            </div>
            <div className='flex flex-1 lg:flex-auto flex-col gap-3'>
              <h3 className='text-2xl font-bold tracking-wide mb-4'>
                {tabContent.title}
              </h3>
              <p>{tabContent.description}</p>
              <div className='flex flex-col gap-2'>
                {tabContent.features.map((feature, index) => (
                  <div key={index} className='flex items-center gap-2'>
                    <Check className='text-primary font-bold' />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesTabs;
