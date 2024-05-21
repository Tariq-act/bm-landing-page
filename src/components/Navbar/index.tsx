'use client';
import { Call, Dehaze, Email } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.style.maxHeight = isOpen
        ? `${menuRef.current.scrollHeight}px`
        : '0px';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className='w-full absolute top-0 left-0'>
      <div className='container mx-auto flex flex-col gap-2 justify-center p-2 md:p-4 md:flex-row items-center md:justify-between'>
        <Link href='/'>
          <div className='flex gap-2 items-center'>
            <Image src='/images/logo.svg' alt='logo' width={30} height={30} />
            <Image
              src='/images/BANKMASTER.svg'
              alt='name'
              width={120}
              height={30}
            />
          </div>
        </Link>
        <div className='flex gap-2 text-xs sm:text-sm items-center'>
          <Link
            href='tel:+918886879525'
            className='cursor-pointer flex items-center gap-1'
          >
            <Call className='text-[#3B5998] text-sm md:text-lg' />
            <span>+91 88868 79525</span>
          </Link>
          <Link
            href='mailto:info@bankmaster.in'
            className='cursor-pointer flex items-center gap-1'
          >
            <Email className='text-[#3B5998] text-sm md:text-lg' />
            <span>Info@bankmaster.in</span>
          </Link>
        </div>
      </div>

      <nav
        className={`bg-[#EAFCEF] drop-shadow px-4 py-2 z-50 ${
          isSticky
            ? 'fixed top-0 w-full transition-all duration-300 ease-in-out'
            : ''
        }`}
      >
        <div className='container mx-auto hidden md:flex items-center gap-6'>
          <Link
            href='#home'
            className='hover:text-secondary transition-all hover:scale-105'
          >
            Home
          </Link>
          <Link
            href='#ourUps'
            className='hover:text-secondary transition-all hover:scale-105'
          >
            Our Usp’s
          </Link>
          <Link
            href='#our-services'
            className='hover:text-secondary transition-all hover:scale-105'
          >
            Our Services
          </Link>
          <Link
            href='#footer'
            className='hover:text-secondary transition-all hover:scale-105'
          >
            Eligibility
          </Link>
          <Link
            href='#home'
            className='hover:text-secondary transition-all hover:scale-105'
          >
            Careers
          </Link>
          <Link
            href='#about'
            className='hover:text-secondary transition-all hover:scale-105'
          >
            About Us
          </Link>
        </div>
        <div className='md:hidden'>
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
              maxHeight: isOpen ? `${menuRef.current?.scrollHeight}px` : '0px',
            }}
          >
            <div className='flex flex-col items-center gap-4 bg-white rounded mt-1 p-2'>
              <Link
                className='w-full hover:bg-[#EAFCEF] px-1 rounded'
                href='#home'
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                className='w-full hover:bg-[#EAFCEF] px-1 rounded'
                href='#ourUps'
                onClick={closeMenu}
              >
                Our Usp’s
              </Link>
              <Link
                className='w-full hover:bg-[#EAFCEF] px-1 rounded'
                href='#our-services'
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link
                className='w-full hover:bg-[#EAFCEF] px-1 rounded'
                href='#footer'
                onClick={closeMenu}
              >
                Eligibility
              </Link>
              <Link
                className='w-full hover:bg-[#EAFCEF] px-1 rounded'
                href='#contact'
                onClick={closeMenu}
              >
                Careers
              </Link>
              <Link
                className='w-full hover:bg-[#EAFCEF] px-1 rounded'
                href='#about'
                onClick={closeMenu}
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
