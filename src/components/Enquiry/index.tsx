'use client';
import { CurrencyRupee, House, Person, Phone } from '@mui/icons-material';
import Image from 'next/image';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Input from '../Input';
import SelectInput from '../Select';
import ThankYou from '@/components/ThankYou';
import Link from 'next/link';

const Enquiry = () => {
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    loanType: '',
    loanAmount: '',
  });

  const imageSources = [
    'images/mapImg/img1.svg',
    'images/mapImg/img2.svg',
    'images/mapImg/img3.svg',
    'images/mapImg/img4.svg',
    'images/mapImg/img5.svg',
  ];

  // State to manage the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showRequiredFieldsAlert, setShowRequiredFieldsAlert] = useState(false);
  const [mobileError, setMobileError] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = () => {
    var scriptURL =
      'https://script.google.com/macros/s/AKfycbzZahSZlYlG8b5YdeWlunJXoJlUZyfe6SADsTiqSPVVGsHSwCEgIgtjIlHmUo513GVu/exec';

    var formSubmit = new FormData();
    formSubmit.append('name', formData.name);
    formSubmit.append('mobile', formData.mobile);
    formSubmit.append('loanType', formData.loanType);
    formSubmit.append('loanAmount', formData.loanAmount);

    setLoading(true);

    fetch(scriptURL, {
      method: 'POST',
      body: formSubmit,
      mode: 'no-cors',
    })
      .then((response) => response.text())
      .then((data) => {
        // Reset the form after successful submission
        setFormData({
          name: '',
          mobile: '',
          loanType: '',
          loanAmount: '',
        });
        setShowThankYou(true);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Form submission failed');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (validateForm()) {
      submitForm();
    } else {
      setShowRequiredFieldsAlert(true);
    }
  };

  const validateForm = () => {
    const mobileRegex = /^\d{10}$/;

    if (!formData.name || !formData.loanType || !formData.loanAmount) {
      setMobileError('');
      setShowRequiredFieldsAlert(true);
      return false;
    }

    if (!formData.mobile.match(mobileRegex)) {
      setMobileError('Mobile number must be exactly 10 digits long.');
      return false;
    }

    setMobileError('');
    setShowRequiredFieldsAlert(false);
    return true;
  };

  useEffect(() => {
    if (mobileError || showRequiredFieldsAlert) {
      const timer = setTimeout(() => {
        setMobileError('');
        setShowRequiredFieldsAlert(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [mobileError, showRequiredFieldsAlert]);

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
        className='w-full lg:w-2/5 md:h-screen bg-cover bg-center   px-6 sm:px-12 pt-5'
        style={{
          backgroundImage: "url('/images/home.svg')",
          height: screenHeight,
        }}
      >
        <h6 className='text-2xl sm:w-96 leading-9 font-medium my-5 md:my-10'>
          Add{' '}
          <span className='text-[#3B5998]'>
            <Link href={'/'}> Power </Link>
          </span>
          To Your{' '}
          <span className='text-[#3B5998]'>
            <Link href={'/'}> Loan </Link>
          </span>
          Selection With Our Master Loan Eligibility Tool
        </h6>

        <div className='h-80 transition-opacity duration-500'>
          <Image
            src={imageSources[currentImageIndex]}
            width={100}
            height={100}
            loading='lazy'
            alt='changingImg'
            className='w-72 mb-10 transition-opacity duration-500'
          />
        </div>

        <div className='w-full relative'>
          <Image
            src={'images/mapIcon.svg'}
            width={100}
            height={100}
            loading='lazy'
            alt='Line'
            className='w-10 lg:w-16 absolute -top-7 md:-top-6 lg:-top-11 -left-4 move-map'
          />

          <Image
            src={'images/mapLine.svg'}
            width={500}
            height={500}
            loading='lazy'
            alt='Line'
            className='w-72 sm:w-80 md:w-96 lg:w-[500px] '
          />
        </div>
      </div>

      <div className='w-full lg:w-3/5 relative flipCard'>
        <div className='absolute lg:w-full mx-auto max-w-[800px] front side'>
          <div className='w-full h-96 '>
            <Image
              src={'images/enquireImg.svg'}
              width={800}
              height={800}
              alt='enquiry'
              className='pt-8 w-full object-cover h-96 md:h-auto'
            />
          </div>
          <div className='absolute top-20 left-16 sm:top-28 sm:left-36'>
            <h1 className='text-base lg:text-md md:text-lg font-medium mb-2'>
              Click Here To
            </h1>
            <div className='flex items-center justify-center ml-14 bg-gradient-to-r from-[#3B5998] to-[#86C421] via-[#86C421] p-1  rounded-lg text-white md:shadow-btn'>
              <button
                className='w-full border p-2 px-4  text-sm sm:text-base sm:px-5 md:py-1 md:px-8  rounded-lg'
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

        <div className='back side'>
          <div className='lg:w-full mx-auto max-w-[800px] front-side'>
            <div className='w-full relative'>
              <Image
                src={'/images/enquireFormImg.svg'}
                width={800}
                height={800}
                alt='enquiry'
                className='w-full object-cover hidden md:block'
              />
              <div className='md:absolute md:top-32 md:left-32 text-base md:w-3/5 mt-14 md:mt-auto'>
                <div className='grid md:grid-cols-2 justify-center items-center gap-8'>
                  <Input
                    type='text'
                    className='p-2'
                    required
                    placeholder='Enter Your Name*'
                    icon={Person}
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <Input
                    type='number'
                    className='p-2'
                    required
                    placeholder='Mobile Number*'
                    icon={Phone}
                    name='mobile'
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                  <SelectInput
                    icon={House}
                    className=' w-full max-w-xs'
                    defaultValue=''
                    required
                    name='loanType'
                    value={formData.loanType}
                    onChange={handleChange}
                  >
                    <option value='' disabled>
                      Select Type
                    </option>
                    <option value='Personal Loan'>Personal Loan</option>
                    <option value='Business Loan'>Business Loan</option>
                    <option value='Working Loan'>Working Loan</option>
                    <option value='Property Loan'>Property Loan</option>
                    <option value='Vehicle Loan'>Vehicle Loan</option>
                    <option value='Education Loan'>Education Loan</option>
                  </SelectInput>
                  <Input
                    type='number'
                    className='p-2'
                    required
                    placeholder='Required Loan Amount'
                    icon={CurrencyRupee}
                    name='loanAmount'
                    value={formData.loanAmount}
                    onChange={handleChange}
                  />
                </div>
                {mobileError && (
                  <div className='text-red-500 mt-2 text-center'>
                    {mobileError}
                  </div>
                )}
                {showRequiredFieldsAlert && (
                  <div className='text-red-500 mt-2 text-center'>
                    Please fill out all required and valid fields.
                  </div>
                )}
                <div className='w-full mt-6 flex justify-center'>
                  <button
                    onClick={handleSubmit}
                    className='bg-lime-500 py-1 px-4 text-lg text-white rounded font-bold tracking-widest'
                    disabled={loading}
                  >
                    {loading ? 'Loading...' : 'Submit'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showThankYou && (
        <ThankYou show={showThankYou} onClose={() => setShowThankYou(false)} />
      )}
    </div>
  );
};

export default Enquiry;
