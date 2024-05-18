'use client';
import { Call, Dehaze, Email } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        menuRef.current.style.maxHeight = `${menuRef.current.scrollHeight}px`;
      } else {
        menuRef.current.style.maxHeight = '0px';
      }
    }
  }, [isOpen]);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=' w-full absolute top-0 left-0'>
      <div className='container mx-auto flex flex-col gap-2 justify-center p-2 md:p-4 md:flex-row items-center md:justify-between'>
        <div className='flex gap-2 items-center'>
          <Image src={'images/logo.svg'} alt='logo' width={30} height={30} />
          <Image
            src={'images/BANKMASTER.svg'}
            alt='name'
            width={120}
            height={30}
          />
        </div>
        <div className='flex gap-2 text-xs sm:text-sm items-center'>
          <Link
            href={'tel:+918886879525'}
            className='cursor-pointer flex items-center gap-1'
          >
            <Call className='text-[#3B5998] text-sm md:text-lg' />{' '}
            <span>+91 88868 79525</span>
          </Link>
          <Link
            href={'mailto: info@bankmaster.in'}
            className='cursor-pointer flex items-center gap-1'
          >
            <Email className='text-[#3B5998] text-sm md:text-lg ' />{' '}
            <span>Info@bankmaster.in</span>
          </Link>
        </div>
      </div>

      <div className=' bg-[#EAFCEF] drop-shadow px-4 py-2 sticky top-0 z-50'>
        <div className='container mx-auto hidden md:flex items-center gap-4'>
          <Link href={'#home'}>Home</Link>
          <Link href={'#home'}>Our Usp’s</Link>
          <Link href={'#home'}>Our Services</Link>
          <Link href={'#home'}>Eligibility</Link>
          <Link href={'#home'}>Careers</Link>
          <Link href={'#home'}>About Us</Link>
        </div>
        <div className=' md:hidden '>
          <div className='flex'>
            <div
              className='bg-white p-1 rounded shadow-sm ml-auto cursor-pointer'
              onClick={toggleMenu}
            >
              <Dehaze />
            </div>
          </div>
          <div
            ref={menuRef}
            className='transition-max-height duration-300 ease-in-out overflow-hidden'
            style={{
              maxHeight:
                isOpen && menuRef.current
                  ? `${menuRef.current.scrollHeight}px`
                  : '0',
            }}
          >
            <div className='flex flex-col items-center gap-4 bg-white rounded mt-1 p-2 '>
              <Link
                className='w-full hover:bg-[#EAFCEF] px-1 rounded'
                href={'#home'}
              >
                Home
              </Link>
              <Link
                className='w-full hover:bg-[#EAFCEF] px-1 rounded'
                href={'#about'}
              >
                Our Usp’s
              </Link>
              <Link
                className='w-full hover:bg-[#EAFCEF] px-1 rounded'
                href={'#services'}
              >
                Services
              </Link>
              <Link
                className='w-full hover:bg-[#EAFCEF] px-1 rounded'
                href={'#contact'}
              >
                Eligibility
              </Link>
              <Link
                className='w-full hover:bg-[#EAFCEF] px-1 rounded'
                href={'#contact'}
              >
                Careers
              </Link>
              <Link
                className='w-full hover:bg-[#EAFCEF] px-1 rounded'
                href={'#contact'}
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
