import { Close } from '@mui/icons-material';
import Image from 'next/image';
import React, { useEffect } from 'react';

const ThankYou = ({
  show,
  onClose,
  type = 'default',
}: {
  show: boolean;
  onClose: () => void;
  type?: string;
}) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 20000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div
      className={`bg-black bg-opacity-50 flex items-center justify-center absolute  ${
        type === 'footer' ? 'bottom-0' : 'top-full'
      } ${type === 'footer' ? 'md:top-0' : 'lg:top-0'} ${
        type === 'footer' ? 'lg:-top-80' : 'lg:top-0'
      } left-0 w-full h-screen z-[9999999] transition-all duration-1000 ${
        show ? 'scale-100' : 'scale-0'
      }`}
    >
      <div className='w-4/5 md:w-3/5 py-10 rounded-lg relative bg-white flex flex-col items-center justify-center transform transition-transform duration-500'>
        <div
          className='absolute p-3 rounded-full bg-white -top-6 -right-6 shadow cursor-pointer'
          onClick={onClose}
        >
          <Close className='text-black' />
        </div>
        <h1 className='text-primary text-center text-lg md:text-4xl z-30'>
          Our Executive Will Connect you soon
        </h1>
        <Image
          src={'/images/ThankYou.svg'}
          alt='thank You'
          width={400}
          height={400}
          className='z-20'
          loading='lazy'
        />
        <Image
          src={'/images/bg-ThankYou.svg'}
          alt='thank You'
          className='absolute bottom-0 right-0 z-10'
          width={600}
          height={600}
          loading='lazy'
        />
      </div>
    </div>
  );
};

export default ThankYou;
