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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    if (!validateForm()) {
      setShowRequiredFieldsAlert(true);
      setTimeout(() => setShowRequiredFieldsAlert(false), 5000);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbzJ18kh_K5K5DpL3K7tIDeQXlDyh3N7o3R8DNzVPijwHJ1L5NNBLLsFAIELd2O5-riEwA/exec',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
          mode: 'no-cors',
        }
      );
      await response.text();
      setSuccessMsg('Form submitted successfully');
      setFormData({ name: '', mobile: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      alert('Form submission failed');
    } finally {
      setLoading(false);
    }
  };

  const validateForm = (): boolean => {
    const mobileRegex = /^\d{10}$/;
    const isMobileValid = mobileRegex.test(formData.mobile);
    setMobileError(
      isMobileValid ? '' : 'Mobile number must be exactly 10 digits'
    );

    const isNameValid = formData.name.trim() !== '';
    const isEmailValid = formData.email.trim() !== '';
    const isMessageValid = formData.message.trim() !== '';

    return isNameValid && isMobileValid && isEmailValid && isMessageValid;
  };
  const renderLinks = (
    links: { href: string; label: string; tab?: number }[]
  ) =>
    links.map(({ href, label, tab }) => (
      <li key={label} onClick={() => tab && setOpenTab(tab)}>
        <Link
          href={href}
          className='transition-all duration-300 hover:text-secondary hover:tracking-wider hover:scale-105'
        >
          <KeyboardArrowRight /> <span>{label}</span>
        </Link>
      </li>
    ));

  return (
    <div className='text-white relative' id='footer'>
      <div className='bg-[#011a41] p-4 lg:px-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 md:gap-y-10 items-start justify-center text-sm'>
          <div>
            <h2 className='ml-2 mb-2 md:mb-4 text-lg font-bold'>
              Eligibility Tool
            </h2>
            <p className='ml-2 text-[#dfe4fd]'>
              Add power to your loan selection by our{' '}
              <span className='uppercase'>loan eligibility master tool.</span>
            </p>
            <ul className='text-[#dfe4fd]'>
              {renderLinks([
                { href: '/terms-and-conditions', label: 'Terms & conditions' },
                { href: '/privacy-policy', label: 'Privacy & policy' },
              ])}
            </ul>
          </div>
          <div className='flex flex-col items-start justify-center'>
            <h4 className='ml-2 mb-2 md:mb-4 text-lg font-bold'>Services</h4>
            <ul>
              {renderLinks([
                { href: '/#our-services', label: 'Personal Loan', tab: 1 },
                { href: '/#our-services', label: 'Business Loan', tab: 2 },
                { href: '/#our-services', label: 'Working capital', tab: 3 },
                { href: '/#our-services', label: 'Property Loan', tab: 4 },
                { href: '/#our-services', label: 'Vehicle Loan', tab: 5 },
                { href: '/#our-services', label: 'Education Loan', tab: 6 },
              ])}
            </ul>
          </div>
          <div>
            <h4 className='ml-2 mb-2 md:mb-4 text-lg font-bold'>Quick Links</h4>
            <ul>
              {renderLinks([
                { href: '/#home', label: 'Home' },
                { href: '/careers', label: 'Careers' },
                { href: '#footer', label: 'Eligibility' },
                { href: '/#collaborators', label: 'Team' },
                { href: '/#about', label: 'About Us' },
                { href: '#footer', label: 'Contact Us' },
              ])}
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
              {showRequiredFieldsAlert && (
                <span className='text-red-500 ml-2'>
                  Please fill out all required and valid fields.
                </span>
              )}
              <div className='flex items-center'>
                <button
                  type='submit'
                  className='bg-secondary w-full md:w-auto rounded-md p-2 md:p-2 px-2 text-white'
                  id='contact-form-button'
                  disabled={loading}
                >
                  {loading ? 'Loading...' : 'Submit'}
                </button>
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
      <div className='flex flex-col md:flex-row items-center justify-between p-4 py-6 md:px-28 bg-[#000b1c]'>
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
