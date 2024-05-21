'use client';
import {
  Facebook,
  Instagram,
  LinkedIn,
  WhatsApp,
  YouTube,
} from '@mui/icons-material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const SocialLinks = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='flex gap-4 my-4'>
      <Link
        href={'https://www.whatsapp.com/'}
        target='_blank'
        className='w-8 h-8 sm:w-10 sm:h-10 p-2 border border-white rounded-full flex items-center justify-center cursor-pointer'
      >
        <WhatsApp
          className='text-white'
          fontSize={isSmallScreen ? 'small' : 'medium'}
        />
      </Link>
      <Link
        href={'/https://www.facebook.com/'}
        target='_blank'
        className='w-8 h-8 sm:w-10 sm:h-10 p-2 border border-white rounded-full flex items-center justify-center cursor-pointer'
      >
        <Facebook
          className='text-white'
          fontSize={isSmallScreen ? 'small' : 'medium'}
        />
      </Link>
      <Link
        href={'https://www.instagram.com/bankmaster_i'}
        className='w-8 h-8 sm:w-10 sm:h-10 p-2 border border-white rounded-full flex items-center justify-center cursor-pointer'
        target='_blank'
      >
        <Instagram
          className='text-white'
          fontSize={isSmallScreen ? 'small' : 'medium'}
        />
      </Link>
      <Link
        href={'https://www.youtube.com/'}
        target='_blank'
        className='w-8 h-8 sm:w-10 sm:h-10 p-2 border border-white rounded-full flex items-center justify-center cursor-pointer'
      >
        <YouTube
          className='text-white'
          fontSize={isSmallScreen ? 'small' : 'medium'}
        />
      </Link>
      <Link
        href={'https://www.linkedin.com/company/bank-master'}
        target='_blank'
        className='w-8 h-8 sm:w-10 sm:h-10 p-2 border border-white rounded-full flex items-center justify-center cursor-pointer'
      >
        <LinkedIn
          className='text-white'
          fontSize={isSmallScreen ? 'small' : 'medium'}
        />
      </Link>
    </div>
  );
};

export default SocialLinks;
