import Image from 'next/image';
import React from 'react';

const CollaboratorsBanks = () => {
  return (
    <div className='bg-[#ebeef5] w-full py-5 px-8 md:py-10 md:px-16'>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 '>
        <div className='flex items-center justify-center bg-white border rounded-md p-4'>
          <Image
            src={'images/banks/axis.svg'}
            width={150}
            height={150}
            alt='bank'
          />
        </div>
        <div className='flex items-center justify-center bg-white border rounded-md p-4'>
          <Image
            src={'images/banks/federal.svg'}
            width={150}
            height={150}
            alt='bank'
          />
        </div>
        <div className='flex items-center justify-center bg-white border rounded-md p-4'>
          <Image
            src={'images/banks/csb.svg'}
            width={150}
            height={150}
            alt='bank'
          />
        </div>
        <div className='flex items-center justify-center bg-white border rounded-md p-4'>
          <Image
            src={'images/banks/union.svg'}
            width={150}
            height={150}
            alt='bank'
          />
        </div>
        <div className='flex items-center justify-center bg-white border rounded-md p-4'>
          <Image
            src={'images/banks/tatacapital.svg'}
            width={150}
            height={150}
            alt='bank'
          />
        </div>
        <div className='flex items-center justify-center bg-white border rounded-md p-4'>
          <Image
            src={'images/banks/kotak.svg'}
            width={150}
            height={150}
            alt='bank'
          />
        </div>
        <div className='flex items-center justify-center bg-white border rounded-md p-4'>
          <Image
            src={'images/banks/bandhan.svg'}
            width={150}
            height={150}
            alt='bank'
          />
        </div>
        <div className='flex items-center justify-center bg-white border rounded-md p-4'>
          <Image
            src={'images/banks/muthoot.svg'}
            width={150}
            height={150}
            alt='bank'
          />
        </div>
        <div className='flex items-center justify-center bg-white border rounded-md p-4'>
          <Image
            src={'images/banks/hsbc.svg'}
            width={150}
            height={150}
            alt='bank'
          />
        </div>
      </div>
    </div>
  );
};

export default CollaboratorsBanks;
