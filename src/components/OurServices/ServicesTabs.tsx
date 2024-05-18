'use client';

import { Check } from '@mui/icons-material';
import Image from 'next/image';
import { useState } from 'react';

const ServicesTabs = () => {
  const [openTab, setOpenTab] = useState<number>(1);

  const activeClasses =
    'border-l border-t border-r rounded-t-lg text-blue-700 bg-secondary text-white text-base lg:text-lg tracking-widest';
  const inactiveClasses = 'text-primary hover:text-blue-700';

  const handleTabChange = (tabNumber: number) => {
    setOpenTab(tabNumber);
  };

  return (
    <div className='p-6 border rounded-md'>
      <ul className='flex flex-wrap justify-center md:justify-start border-b transition-all ease-in-out '>
        <li
          onClick={() => handleTabChange(1)}
          className={`mr-1 ${openTab === 1 ? '-mb-px' : ''}`}
        >
          <button
            className={`bg-white inline-block py-2 px-4 font-semibold ${
              openTab === 1 ? activeClasses : inactiveClasses
            }`}
          >
            Personal Loan
          </button>
        </li>
        <li
          onClick={() => handleTabChange(2)}
          className={`mr-1 ${openTab === 2 ? '-mb-px' : ''}`}
        >
          <button
            className={`bg-white inline-block py-2 px-4 font-semibold ${
              openTab === 2 ? activeClasses : inactiveClasses
            }`}
          >
            Business Loan
          </button>
        </li>
        <li
          onClick={() => handleTabChange(3)}
          className={`mr-1 ${openTab === 3 ? '-mb-px' : ''}`}
        >
          <button
            className={`bg-white inline-block py-2 px-4 font-semibold ${
              openTab === 3 ? activeClasses : inactiveClasses
            }`}
          >
            Working Capital
          </button>
        </li>
        <li
          onClick={() => handleTabChange(4)}
          className={`mr-1 ${openTab === 4 ? '-mb-px' : ''}`}
        >
          <button
            className={`bg-white inline-block py-2 px-4 font-semibold ${
              openTab === 4 ? activeClasses : inactiveClasses
            }`}
          >
            Property Loan
          </button>
        </li>
        <li
          onClick={() => handleTabChange(5)}
          className={`mr-1 ${openTab === 5 ? '-mb-px' : ''}`}
        >
          <button
            className={`bg-white inline-block py-2 px-4 font-semibold ${
              openTab === 5 ? activeClasses : inactiveClasses
            }`}
          >
            Vehicle Loan
          </button>
        </li>
        <li
          onClick={() => handleTabChange(6)}
          className={`mr-1 ${openTab === 6 ? '-mb-px' : ''}`}
        >
          <button
            className={`bg-white inline-block py-2 px-4 font-semibold ${
              openTab === 6 ? activeClasses : inactiveClasses
            }`}
          >
            Education Loan
          </button>
        </li>
      </ul>
      <div className='w-full mt-4'>
        <div
          className={`${
            openTab === 1 ? 'block' : 'hidden'
          } flex flex-col md:flex-row items-center`}
        >
          <div className='flex-1 lg:flex-auto'>
            <Image
              src={'images/loans/personal_loan.svg'}
              width={500}
              height={500}
              alt='personal-loan'
              loading='lazy'
            />
          </div>
          <div className='flex flex-1 lg:flex-auto flex-col gap-3'>
            <h3 className='text-2xl font-bold tracking-wide mb-4'>
              Unlock Financial Freedom: Navigating the World of Personal Loans
            </h3>
            <p>
              Experience financial freedom without collateral at Bank Master.
              Your ultimate guide to personal loans, navigate low interest
              rates, terms, and eligibility confidently. Empower your financial
              journey today.
            </p>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                <Check className='text-primary font-bold' />
                <p>Unsecured Loans</p>
              </div>
              <div className='flex items-center gap-2'>
                <Check className='text-primary font-bold' />
                <p>{`21 Banks & NBFC's Partners`}</p>
              </div>
              <div className='flex items-center gap-2'>
                <Check className='text-primary font-bold' />
                <p>Credit Facilities</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            openTab === 2 ? 'block' : 'hidden'
          } flex flex-col md:flex-row items-center`}
        >
          <div className='flex-1 lg:flex-auto'>
            <Image
              src={'images/loans/business_loan.svg'}
              width={500}
              height={500}
              alt='personal-loan'
              loading='lazy'
            />
          </div>
          <div className='flex flex-1 lg:flex-auto flex-col gap-3'>
            <h3 className='text-2xl font-bold tracking-wide mb-4'>
              Amplify Business Prosperity: Uncover the Power of Business Loans
            </h3>
            <p>
              Seize Financial Advantage at Bank Master, Collateral-Free. Your
              Ultimate Business Loan Guide. Navigate Interest Rates, Terms, and
              Eligibility with Confidence. Empower Your Business Journey Today.
            </p>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                <Check className='text-primary font-bold' />
                <p>Unsecured Loans</p>
              </div>
              <div className='flex items-center gap-2'>
                <Check className='text-primary font-bold' />
                <p>{`21 Banks & NBFC's Partners`}</p>
              </div>
              <div className='flex items-center gap-2'>
                <Check className='text-primary font-bold' />
                <p>Credit Facilities</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            openTab === 3 ? 'block' : 'hidden'
          } flex flex-col md:flex-row items-center`}
        >
          <div className='flex-1 lg:flex-auto'>
            <Image
              src={'images/loans/working_capital.svg'}
              width={500}
              height={500}
              alt='personal-loan'
              loading='lazy'
            />
          </div>
          <div className='flex flex-1 lg:flex-auto flex-col gap-3'>
            <h3 className='text-2xl font-bold tracking-wide mb-4'>
              Optimize Operations: Navigating the World of Working Capital
            </h3>
            <p>
              Enhance Financial Agility with Bank Master. Your Comprehensive
              Guide to Working Capital. Navigate Terms, Interest Rates, and
              Eligibility with Confidence. Empower Your Business Journey Today.
            </p>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                <Check className='text-primary font-bold' />
                <p>Secured & Unsecured Loans</p>
              </div>
              <div className='flex items-center gap-2'>
                <Check className='text-primary font-bold' />
                <p>{`21 Banks & NBFC's Partners`}</p>
              </div>
              <div className='flex items-center gap-2'>
                <Check className='text-primary font-bold' />
                <p>{`6 Banks & NBFC's Partners`}</p>
              </div>
              <div className='flex items-center gap-2'>
                <Check className='text-primary font-bold' />
                <p>Credit Facilities</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            openTab === 4 ? 'block' : 'hidden'
          } flex flex-col md:flex-row items-center`}
        >
          <div className='flex-1 lg:flex-auto'>
            <Image
              src={'images/loans/property_loan.svg'}
              width={500}
              height={500}
              alt='personal-loan'
              loading='lazy'
            />
          </div>
          <div className='flex flex-1 lg:flex-auto flex-col gap-3'>
            <h3 className='text-2xl font-bold tracking-wide mb-4'>
              Transform Dreams into Reality: Explore the World of Property &
              Mortgage Loans
            </h3>
            <p>
              Turn Your Property Dreams into Achievements with Bank Master. Your
              Inspirational Guide to Property & Mortgage Loans, revealing
              strategies to transform your aspirations into reality. Navigate
              Interest Rates, Terms, and Eligibility with Confidence. Empower
              Your Property Journey Today.
            </p>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                <Check className='text-primary font-bold' />
                <p>Purchase & Mortgage Loans</p>
              </div>
              <div className='flex items-center gap-2'>
                <Check className='text-primary font-bold' />
                <p>{`32 Banks & NBFC's Partners`}</p>
              </div>
              <div className='flex items-center gap-2'>
                <Check className='text-primary font-bold' />
                <p>{`6 Banks & NBFC's Partners`}</p>
              </div>
              <div className='flex items-center gap-2'>
                <Check className='text-primary font-bold' />
                <p>Credit Facilities</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            openTab === 5 ? 'block' : 'hidden'
          } flex flex-col md:flex-row items-center`}
        >
          <div className='flex-1 lg:flex-auto'>
            <Image
              src={'images/loans/vehicle_loan.svg'}
              width={500}
              height={500}
              alt='personal-loan'
              loading='lazy'
            />
          </div>
          <div className='flex flex-1 lg:flex-auto flex-col gap-3'>
            <h3 className='text-2xl font-bold tracking-wide mb-4'>
              Drive Your Dreams: Cruising Through the World of Vehicle Loans
            </h3>
            <p>
              Turn Your Automotive Dreams into Reality with Bank Master. Your
              Ultimate Guide to Vehicle Loans, unveiling strategies to make your
              dream vehicle a reality. Navigate Interest Rates, Terms, and
              Eligibility with Confidence, Accelerating Your vehicle Journey
              Today.
            </p>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                <Check className='text-primary font-bold' />
                <p>New & Old Vehicle Loans</p>
              </div>
              <div className='flex items-center gap-2'>
                <Check className='text-primary font-bold' />
                <p>{`8 Banks & NBFC's Partners`}</p>
              </div>
              <div className='flex items-center gap-2'>
                <Check className='text-primary font-bold' />
                <p>Credit Facilities</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            openTab === 6 ? 'block' : 'hidden'
          } flex flex-col md:flex-row items-center`}
        >
          <div className='flex-1 lg:flex-auto'>
            <Image
              src={'images/loans/education_loan.svg'}
              width={500}
              height={500}
              alt='personal-loan'
              loading='lazy'
            />
          </div>
          <div className='flex flex-1 lg:flex-auto flex-col gap-3'>
            <h3 className='text-2xl font-bold tracking-wide mb-4'>
              Level Up Your Skills: Navigating the World of Educational Loans
            </h3>
            <p>
              Transform Your Academic Dreams into Reality with Bank Master. Your
              Definitive Guide to Educational Loans, revealing strategies to
              make your educational goals a reality. Navigate Interest Rates,
              Terms, and Eligibility with Confidence. Empower Your Educational
              Journey Today.
            </p>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                <Check className='text-primary font-bold' />
                <p>New & Old Vehicle Loans</p>
              </div>
              <div className='flex items-center gap-2'>
                <Check className='text-primary font-bold' />
                <p>International & Domestic Loans</p>
              </div>
              <div className='flex items-center gap-2'>
                <Check className='text-primary font-bold' />
                <p>{`8 Banks & NBFC's Partners`}</p>
              </div>
              <div className='flex items-center gap-2'>
                <Check className='text-primary font-bold' />
                <p>Credit Facilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesTabs;
