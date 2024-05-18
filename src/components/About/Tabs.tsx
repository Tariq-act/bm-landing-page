'use client';

import { useState } from 'react';

const Tabs = () => {
  const [openTab, setOpenTab] = useState<number>(1);

  const activeClasses = 'border-l border-t border-r rounded-t-lg text-blue-700';
  const inactiveClasses = 'text-blue-500 hover:text-blue-700';

  const handleTabChange = (tabNumber: number) => {
    setOpenTab(tabNumber);
  };

  return (
    <div className='p-6 border rounded'>
      <ul className='flex flex-wrap justify-center md:justify-start border-b transition-all ease-in-out'>
        <li
          onClick={() => handleTabChange(1)}
          className={`mr-1 ${openTab === 1 ? '-mb-px' : ''}`}
        >
          <button
            className={`bg-white inline-block py-2 px-4 font-semibold ${
              openTab === 1 ? activeClasses : inactiveClasses
            }`}
          >
            Mission
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
            Vision
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
            Slogan
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
            CVP
          </button>
        </li>
      </ul>
      <div className='w-full mt-4'>
        <div
          className={`transition-opacity duration-500 ease-in-out ${
            openTab === 1 ? 'opacity-100' : 'opacity-0 hidden'
          }`}
        >
          <p>
            Our Mission is to make this cluttered financial lending market -
            Organise, Transparent & Accessible for lenders & clients creating a
            win-win situation
          </p>
          <p className='mb-0'>
            {`To empower individuals and businesses by providing a seamless
            platform that connects borrowers with a wide range of top Banks &
            NBFC's. We believe in bringing the transparency, efficiency &
            tailored made loan options.`}
          </p>
        </div>
        <div
          className={`transition-opacity duration-500 ease-in-out ${
            openTab === 2 ? 'opacity-100' : 'opacity-0 hidden'
          }`}
        >
          <p>
            {`Our Ambition is to create an ecosystem from normal salaried
            customers to top class industrialists seeking loans in a right &
            beneficial banks & NBFC's at the right situation`}
          </p>
          <p className='mb-0'>
            {`Creating a peer to peer platform from selecting, borrowing,
            tracking, solving issues related to almost all loan services from
            top banks & NBFC's`}
          </p>
        </div>
        <div
          className={`transition-opacity duration-500 ease-in-out ${
            openTab === 3 ? 'opacity-100' : 'opacity-0 hidden'
          }`}
        >
          <p>
            {`At Bank Master, we're not just aggregating loans; we're transforming
            the way you access financial solutions—making it smarter, faster,
            and personalized just for you.`}
          </p>
          <p className='mb-0'>
            Command your financial future with Bank Master – where innovation
            meets your aspirations, and every transaction shapes a path to your
            prosperity.
          </p>
        </div>
        <div
          className={`transition-opacity duration-500 ease-in-out ${
            openTab === 4 ? 'opacity-100' : 'opacity-0 hidden'
          }`}
        >
          <p className='mb-0'>
            At the heart of our Customer Value Proposition lies a commitment to
            your unique needs, delivering tailored solutions that resonate with
            your goals. We pride ourselves on seamless interactions. <br />
            <br />
            Our success is our priority, ensuring each encounter adds meaningful
            value in our partnership built on understanding and excellence
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
