import Image from 'next/image';
import React from 'react';

const CollaboratorsBanks = () => {
  const images = [
    'images/banks/img-1.svg',
    'images/banks/img-2.svg',
    'images/banks/img-3.svg',
    'images/banks/img-4.svg',
    'images/banks/img-5.svg',
    'images/banks/img-6.svg',
    'images/banks/img-7.svg',
    'images/banks/img-8.svg',
    'images/banks/img-9.svg',
    'images/banks/img-10.svg',
    'images/banks/img-11.svg',
    'images/banks/img-12.svg',
    'images/banks/img-13.svg',
    'images/banks/img-14.svg',
    'images/banks/img-15.svg',
    'images/banks/img-16.svg',
    'images/banks/img-17.svg',
    'images/banks/img-18.svg',
    'images/banks/img-19.svg',
    'images/banks/img-20.svg',
    'images/banks/img-21.svg',
    'images/banks/img-22.svg',
    'images/banks/img-23.svg',
    'images/banks/img-24.svg',
    'images/banks/img-25.svg',
  ];
  return (
    <div className='bg-[#ebeef5] w-full py-5 px-8 md:py-10 md:px-16'>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 hide-scrollbar max-h-screen'>
        {images.map((img, idx) => (
          <div
            key={idx}
            className='flex items-center justify-center bg-white border rounded-md p-4'
          >
            <Image src={img} width={150} height={150} alt='bank' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaboratorsBanks;
