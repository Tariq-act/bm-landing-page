'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Enquiry = () => {
  const imageSources = [
    'images/mapImg/img1.svg',
    'images/mapImg/img2.svg',
    'images/mapImg/img3.svg',
    'images/mapImg/img4.svg',
    'images/mapImg/img5.svg',
  ];

  // State to manage the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Effect to change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex: number) =>
        prevIndex === imageSources.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [imageSources.length]);

  const marginTopSize = 6;
  const screenHeight = `calc(100vh - ${marginTopSize}rem)`;
  return (
    <div className='block mx-auto lg:flex w-full mt-[7.3rem] md:mt-24'>
      <div
        className='w-full lg:w-2/5 h-screen bg-cover bg-center -z-30  px-6 sm:px-12 pt-5'
        style={{
          backgroundImage: "url('/images/home.svg')",
          height: screenHeight,
        }}
      >
        <h6 className='text-2xl sm:w-96 leading-9 font-medium my-10'>
          Add <span className='text-[#3B5998]'>Power </span>
          To Your <span className='text-[#3B5998]'>Loan </span>
          Selection With Our Master Loan Eligibility Tool
        </h6>

        <div className='h-80 transition-opacity duration-500'>
          <Image
            src={imageSources[currentImageIndex]}
            width={100}
            height={100}
            alt='changingImg'
            className='w-72 mb-10 transition-opacity duration-500'
          />
        </div>

        <div className='w-full relative'>
          <Image
            src={'images/mapIcon.svg'}
            width={100}
            height={100}
            alt='Line'
            className='w-10 lg:w-16 absolute -top-5 md:-top-6 lg:-top-10 -left-4 move-map'
          />

          <Image
            src={'images/mapLine.svg'}
            width={500}
            height={500}
            alt='Line'
            className='w-72 sm:w-80 md:w-96 lg:w-[500px] '
          />
        </div>
      </div>

      <div className='w-full lg:w-3/5 relative flipCard'>
        <div className='absolute lg:w-full mx-auto max-w-[800px] front side'>
          <div className='w-full h-96'>
            <Image
              src={'images/enquireImg.svg'}
              width={800}
              height={800}
              alt='enquiry'
              className='pt-8 w-full object-cover'
            />
          </div>
          <div className='absolute top-20 left-16 sm:top-28 sm:left-36'>
            <h1 className='lg:text-md md:text-lg font-medium mb-2'>
              Click Here To
            </h1>
            <div className='ml-14 bg-gradient-to-r from-blue-600 to-green-700 via-green-700 p-1  rounded-lg text-white'>
              <button
                className='border px-1 text-xs sm:text-base sm:px-5 md:py-1 rounded-lg'
                onClick={() => {
                  const flipCard = document.querySelector('.flipCard');
                  flipCard?.classList.add('rotate');
                }}
              >
                Enquire
              </button>
            </div>
          </div>
        </div>

        <div className='mt-16 back side'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            consequatur perspiciatis voluptatum nostrum dolorem? Totam, quo
            natus deleniti porro adipisci ad eveniet veniam a laboriosam dolores
            deserunt eligendi delectus quibusdam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
