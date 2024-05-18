import Image from 'next/image';
import React from 'react';
import CountUpNumber from '../CountUp';

const LeadingImpact = () => {
  return (
    <div className='container md:px-4 mx-auto mt-10 md:mt-32'>
      <h1 className='text-primary text-center font-semibold text-4xl'>
        Impact in Lending Sector
      </h1>

      <div className='grid  grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center justify-center mt-10 gap-8'>
        <div className='md:border-r-2 px-16 flex flex-col gap-2 items-center'>
          <Image
            src={'images/leadingSector/happyClient.svg'}
            width={80}
            height={80}
            objectFit='cover'
            className='max-w-44'
            alt='happy'
          />
          <CountUpNumber initialValue={849} />
          <h2 className='font-semibold text-md text-center'>Happy Clients</h2>
        </div>
        <div className='md:border-r-2 px-16 flex flex-col gap-2 items-center'>
          <Image
            src={'images/leadingSector/banksNBFC.svg'}
            width={80}
            height={80}
            alt='happy'
            className='max-w-44'
          />
          <CountUpNumber initialValue={27} />
          <h2 className='font-semibold text-md text-center'>Banks & NBFC’s</h2>
        </div>
        <div className='md:border-r-2 px-16 flex flex-col gap-2 items-center'>
          <Image
            src={'images/leadingSector/amountDisbursed.svg'}
            width={80}
            height={80}
            alt='happy'
            className='max-w-44'
          />
          <CountUpNumber initialValue={268.2} />
          <h2 className='font-semibold text-md text-center '>
            Amount Disbursed (Cr)
          </h2>
        </div>
        <div className='md:border-r-2 px-16 flex flex-col gap-2 items-center'>
          <Image
            src={'images/leadingSector/location.svg'}
            width={80}
            height={80}
            alt='happy'
            className='max-w-44'
          />
          <CountUpNumber initialValue={76} />
          <h2 className='font-semibold text-md text-center '>Locations</h2>
        </div>
        <div className='px-24 flex flex-col gap-2 items-center'>
          <Image
            src={'images/leadingSector/services.svg'}
            width={80}
            height={80}
            alt='happy'
            className='max-w-44'
          />
          <CountUpNumber initialValue={6} />
          <h2 className='font-semibold text-md text-center'>Services</h2>
        </div>
      </div>
    </div>
  );
};

export default LeadingImpact;
