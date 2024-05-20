import { KeyboardArrowRight } from '@mui/icons-material';
import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <div className='text-white' id='footer'>
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
                <KeyboardArrowRight /> <span>Terms & conditions</span>
              </li>
              <li>
                <KeyboardArrowRight /> <span>Privacy & policy</span>
              </li>
            </ul>
          </div>
          <div className='flex flex-col items-start justify-center'>
            <h4 className='ml-2 mb-2 md:mb-4 text-lg font-bold'>Services</h4>
            <ul>
              <li>
                <KeyboardArrowRight /> <span>Personal Loan</span>
              </li>
              <li>
                <KeyboardArrowRight /> <span>Business Loan</span>
              </li>
              <li>
                <KeyboardArrowRight /> <span>Working capital</span>
              </li>
              <li>
                <KeyboardArrowRight /> <span>Property Loan</span>
              </li>
              <li>
                <KeyboardArrowRight /> <span>Vehicle Loan</span>
              </li>
              <li>
                <KeyboardArrowRight /> <span>Education Loan</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='ml-2 mb-2 md:mb-4 text-lg font-bold'>Quick Links</h4>
            <ul>
              <li>
                <KeyboardArrowRight /> <span>Home</span>
              </li>
              <li>
                <KeyboardArrowRight /> <span>Careers</span>
              </li>
              <li>
                <KeyboardArrowRight /> <span>Eligibility</span>
              </li>
              <li>
                <KeyboardArrowRight /> <span>Team</span>
              </li>
              <li>
                <KeyboardArrowRight /> <span>About Us</span>
              </li>
              <li>
                <KeyboardArrowRight /> <span>Contact Us</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='mb-2 md:mb-4 text-lg font-bold'>Contact Us</h4>
            <form className='flex flex-col gap-2'>
              <input
                type='text'
                className='p-1 px-4 rounded-lg text-black'
                placeholder='Your Name'
              />
              <input
                type='number'
                className='p-1 px-4 rounded-lg text-black'
                placeholder='Phone Number'
              />
              <input
                type='email'
                className='p-1 px-4 rounded-lg text-black'
                placeholder='Your email'
              />
              <textarea
                className='p-1 px-4 rounded-lg text-black'
                placeholder='Message'
              />
              <div>
                <button className='bg-secondary w-full md:w-auto rounded-md p-2 md:p-1 px-2 text-white'>
                  Submit
                </button>
              </div>
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
