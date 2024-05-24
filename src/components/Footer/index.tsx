'use client';
import { KeyboardArrowRight } from '@mui/icons-material';
import React, { useState } from 'react';
import SocialLinks from './SocialLinks';
import Link from 'next/link';
import { useTabs } from '@/context';

interface FormData {
  name: string;
  mobile: string;
  email: string;
  message: string;
}

const Footer = () => {
  const { setOpenTab } = useTabs();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [showRequiredFieldsAlert, setShowRequiredFieldsAlert] = useState(false);
  const [mobileError, setMobileError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    // Validate the form
    if (!validateForm()) {
      setShowRequiredFieldsAlert(true);
      setTimeout(() => {
        setShowRequiredFieldsAlert(false);
      }, 5000); // Hide the alert after 5 seconds
      return;
    }

    setLoading(true);

    try {
      const scriptURL =
        'https://script.google.com/macros/s/AKfycbzJ18kh_K5K5DpL3K7tIDeQXlDyh3N7o3R8DNzVPijwHJ1L5NNBLLsFAIELd2O5-riEwA/exec';

      const response = await fetch(scriptURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'no-cors',
      });

      const data = await response.text();
      setSuccessMsg('Form submitted successfully');
      setFormData({
        name: '',
        mobile: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Form submission failed');
    } finally {
      setLoading(false);
    }
  };

  const validateForm = (): boolean => {
    // Regular expression to match exactly 10 digits for mobile number
    const mobileRegex = /^\d{10}$/;

    // Check if mobile matches the regex
    const isMobileValid = mobileRegex.test(formData.mobile);

    if (!isMobileValid) {
      setMobileError('Mobile number must be exactly 10 digits');
    } else {
      setMobileError('');
    }

    return (
      formData.name !== '' &&
      isMobileValid && // isMobileValid is a boolean now
      formData.email !== '' &&
      formData.message !== ''
    );
  };

  return (
    <div className='text-white relative' id='footer'>
      <div className='bg-[#011a41] p-4 lg:px-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 md:gap-y-10 items-start justify-center text-sm'>
          <div>
            <h2 className='ml-2 mb-2 md:mb-4 text-lg font-bold'>
              Eligibility Tool
            </h2>
            <p className='ml-2 text-[#dfe4fd]'>
              Add power to your loan selection by our
              <span className='uppercase'>loan eligibility master tool.</span>
            </p>

            <ul className='text-[#dfe4fd]'>
              <li>
                <KeyboardArrowRight />{' '}
                <Link
                  href={'/terms-and-conditions'}
                  className='transition-all duration-300 hover:text-secondary hover:tracking-wider hover:scale-105'
                >
                  Terms & conditions
                </Link>
              </li>
              <li>
                <KeyboardArrowRight />{' '}
                <Link
                  href={'/privacy-policy'}
                  className='transition-all duration-300 hover:text-secondary hover:tracking-wider hover:scale-105'
                >
                  Privacy & policy
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex flex-col items-start justify-center'>
            <h4 className='ml-2 mb-2 md:mb-4 text-lg font-bold'>Services</h4>
            <ul>
              <li onClick={() => setOpenTab(1)}>
                <Link
                  href='/#our-services'
                  className='transition-all duration-300 hover:text-secondary hover:tracking-wider hover:scale-105'
                >
                  <KeyboardArrowRight /> <span>Personal Loan</span>
                </Link>
              </li>
              <li onClick={() => setOpenTab(2)}>
                <Link
                  href='/#our-services'
                  className='transition-all duration-300 hover:text-secondary hover:tracking-wider hover:scale-105'
                >
                  <KeyboardArrowRight /> <span>Business Loan</span>
                </Link>
              </li>
              <li onClick={() => setOpenTab(3)}>
                <Link
                  href='/#our-services'
                  className='transition-all duration-300 hover:text-secondary hover:tracking-wider hover:scale-105'
                >
                  <KeyboardArrowRight /> <span>Working capital</span>
                </Link>
              </li>
              <li onClick={() => setOpenTab(4)}>
                <Link
                  href='/#our-services'
                  className='transition-all duration-300 hover:text-secondary hover:tracking-wider hover:scale-105'
                >
                  <KeyboardArrowRight /> <span>Property Loan</span>
                </Link>
              </li>
              <li onClick={() => setOpenTab(5)}>
                <Link
                  href='/#our-services'
                  className='transition-all duration-300 hover:text-secondary hover:tracking-wider hover:scale-105'
                >
                  <KeyboardArrowRight /> <span>Vehicle Loan</span>
                </Link>
              </li>
              <li onClick={() => setOpenTab(6)}>
                <Link
                  href='/#our-services'
                  className='transition-all duration-300 hover:text-secondary hover:tracking-wider hover:scale-105'
                >
                  <KeyboardArrowRight /> <span>Education Loan</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='ml-2 mb-2 md:mb-4 text-lg font-bold'>Quick Links</h4>
            <ul>
              <li>
                <Link
                  href='/#home'
                  className='transition-all duration-300 hover:text-secondary hover:tracking-wider hover:scale-105'
                >
                  <KeyboardArrowRight /> <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href={'/careers'}
                  className='transition-all duration-300 hover:text-secondary hover:tracking-wider hover:scale-105'
                >
                  <KeyboardArrowRight /> <span>Careers</span>
                </Link>
              </li>
              <li>
                <Link
                  href={'#footer'}
                  className='transition-all duration-300 hover:text-secondary hover:tracking-wider hover:scale-105'
                >
                  <KeyboardArrowRight /> <span>Eligibility</span>
                </Link>
              </li>
              <li>
                <Link
                  href={'/#collaborators'}
                  className='transition-all duration-300 hover:text-secondary hover:tracking-wider hover:scale-105'
                >
                  <KeyboardArrowRight /> <span>Team</span>
                </Link>
              </li>
              <li>
                <Link
                  href={'/#about'}
                  className='transition-all duration-300 hover:text-secondary hover:tracking-wider hover:scale-105'
                >
                  <KeyboardArrowRight /> <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href={'#footer'}
                  className='transition-all duration-300 hover:text-secondary hover:tracking-wider hover:scale-105'
                >
                  <KeyboardArrowRight /> <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='mb-2 md:mb-4 text-lg font-bold'>Contact Us</h4>
            <form
              className='flex flex-col gap-2'
              id='contact-form'
              onSubmit={handleSubmit}
            >
              <input
                type='text'
                className='p-1 px-4 rounded-lg text-black'
                placeholder='Your Name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type='number'
                className='p-1 px-4 rounded-lg text-black'
                placeholder='Phone Number'
                name='mobile'
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              {mobileError && (
                <span className='text-red-500 ml-2'>{mobileError}</span>
              )}
              <input
                type='email'
                className='p-1 px-4 rounded-lg text-black'
                placeholder='Your email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                className='p-1 px-4 rounded-lg text-black'
                placeholder='Message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
              />
              <div className='flex items-center'>
                <button
                  type='submit'
                  className='bg-secondary w-full md:w-auto rounded-md p-2 md:p-1 px-2 text-white'
                  id='contact-form-button'
                  disabled={loading}
                >
                  {loading ? 'Loading...' : 'Submit'}
                </button>
                {showRequiredFieldsAlert && (
                  <span className='text-red-500 ml-2'>
                    Please fill out all required fields.
                  </span>
                )}
              </div>
              {successMsg && (
                <span className='text-green-600'>
                  Form Submitted Successfully.
                </span>
              )}
            </form>
          </div>
        </div>
        <SocialLinks />
      </div>

      <div className='flex flex-col md:flex-row items-center justify-between p-4 py-6 md:px-28 bg-[#000b1c]  '>
        <h2 className='text-center text-md-start mb-3 mb-md-0'>
          &copy; <a href='#'>Bank Master</a>, All Right Reserved.
        </h2>
        <h2 className='text-center text-sm md:text-base'>
          Move Faster & Secure with BANK MASTER, Get in touch with us <br />
          Save countless hours of efforts & money, by getting Loan with us.
        </h2>
      </div>
    </div>
  );
};

export default Footer;
