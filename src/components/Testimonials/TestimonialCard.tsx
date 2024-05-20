import React from 'react';
import { FormatQuote, Person } from '@mui/icons-material';

const TestimonialCard = ({
  description,
  name,
  company,
}: {
  description: string;
  name: string;
  company: string;
}) => {
  return (
    <div>
      <div className='testimonial-item'>
        <div className='testimonial-text border rounded p-4 pt-5 mb-5'>
          <div className='btn-square bg-white border rounded-full flex items-center justify-center'>
            <FormatQuote className='text-primary' fontSize='large' />
          </div>
          <p className='mt-4 text-sm md:text-lg'>{description}</p>
        </div>

        <div className='mt-14 flex justify-center items-center'>
          <div
            className='p-2 border-2 bg-gray-200 rounded-full'
            style={{ borderColor: '#3B5998' }}
          >
            <Person
              className='text-primary text-4xl'
              style={{ fontSize: '2.5rem' }}
            />
          </div>
        </div>

        <h4 className='text-base md:text-lg'>{name}</h4>
        <span>{company}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
