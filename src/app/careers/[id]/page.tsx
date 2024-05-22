'use client';

import { UploadSharp } from '@mui/icons-material';
import Link from 'next/link';
import React, { useState, ChangeEvent, FormEvent, useRef } from 'react';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  graduationYear: string;
  experience: string;
  expectedCTC: string;
  currentCTC: string;
  currentLocation: string;
  howDidYouFind: string;
  currentEmployer: string;
  noticePeriod: string;
  resume: File | null;
}

const JobApplication: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    graduationYear: '',
    experience: '',
    expectedCTC: '',
    currentCTC: '',
    currentLocation: '',
    howDidYouFind: '',
    currentEmployer: '',
    noticePeriod: '',
    resume: null,
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const handleBoxClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFileName(file.name);
      setForm((prevForm) => ({ ...prevForm, resume: file }));
      // Handle file selection logic here
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [id]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(form);
  };

  return (
    <div className='shadow p-4 py-8 m-4 w-11/12 md:w-4/5  lg:w-3/5 mx-auto rounded-lg'>
      <h1 className='text-2xl text-primary font-semibold my-4'>
        Job Description
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, aperiam
        optio assumenda possimus id aliquam molestias consectetur. Totam quo
        recusandae, optio reiciendis consequatur autem minus alias delectus,
        porro atque quisquam!
      </p>
      <h1 className='text-2xl text-primary font-semibold my-4'>
        Job Requirements
      </h1>
      <ul className='list-disc mx-4 flex flex-col gap-2 '>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, a?
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, a?
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, a?
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, a?
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, a?
        </li>
      </ul>

      <div className='w-full md:w-4/5 mx-auto mt-4'>
        <h1 className='text-2xl text-primary font-semibold my-4'>
          Personal Details
        </h1>
        <form onSubmit={handleSubmit}>
          <div className='grid md:grid-cols-2 gap-2'>
            <div className='flex flex-col gap-1'>
              <label htmlFor='firstName' className='text-gray-500 text-sm'>
                First Name<span className='text-red-500'>*</span>
              </label>
              <input
                id='firstName'
                className='p-1 border rounded focus:outline-primary focus:outline-double'
                value={form.firstName}
                onChange={handleChange}
                type='text'
                required
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor='lastName' className='text-gray-500 text-sm'>
                Last Name<span className='text-red-500'>*</span>
              </label>
              <input
                id='lastName'
                type='text'
                className='p-1 border rounded focus:outline-primary focus:outline-double'
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor='email' className='text-gray-500 text-sm'>
                E Mail<span className='text-red-500'>*</span>
              </label>
              <input
                id='email'
                type='email'
                className='p-1 border rounded focus:outline-primary focus:outline-double'
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor='contact' className='text-gray-500 text-sm'>
                Contact<span className='text-red-500'>*</span>
              </label>
              <input
                id='contact'
                type='number'
                className='p-1 border rounded focus:outline-primary focus:outline-double'
                value={form.contact}
                onChange={handleChange}
                required
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label
                htmlFor='YearOfGraduation'
                className='text-gray-500 text-sm'
              >
                Year Of Graduation<span className='text-red-500'>*</span>
              </label>
              <input
                id='graduationYear'
                type='number'
                className='p-1 border rounded focus:outline-primary focus:outline-double'
                value={form.graduationYear}
                onChange={handleChange}
                required
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor='experience' className='text-gray-500 text-sm'>
                Experience<span className='text-red-500'>*</span>
              </label>
              <input
                id='experience'
                type='text'
                className='p-1 border rounded focus:outline-primary focus:outline-double'
                value={form.experience}
                onChange={handleChange}
                required
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor='expectedCTC' className='text-gray-500 text-sm'>
                Expected CTC (In Lakhs per Annum)
                <span className='text-red-500'>*</span>
              </label>
              <input
                id='expectedCTC'
                type='number'
                className='p-1 border rounded focus:outline-primary focus:outline-double'
                value={form.expectedCTC}
                onChange={handleChange}
                required
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor='currentCTC' className='text-gray-500 text-sm'>
                Current CTC (In Lakhs per Annum)
                <span className='text-red-500'>*</span>
              </label>
              <input
                id='currentCTC'
                type='number'
                className='p-1 border rounded focus:outline-primary focus:outline-double'
                value={form.currentCTC}
                onChange={handleChange}
                required
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label
                htmlFor='currentLocation'
                className='text-gray-500 text-sm'
              >
                Current Location
                <span className='text-red-500'>*</span>
              </label>
              <input
                id='currentLocation'
                type='text'
                className='p-1 border rounded focus:outline-primary focus:outline-double'
                value={form.currentLocation}
                onChange={handleChange}
                required
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor='howDidYouFind' className='text-gray-500 text-sm'>
                How did you come Across this Vacancy*
                <span className='text-red-500'>*</span>
              </label>
              <input
                id='howDidYouFind'
                type='text'
                className='p-1 border rounded focus:outline-primary focus:outline-double'
                value={form.howDidYouFind}
                onChange={handleChange}
                required
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label
                htmlFor='currentEmployer'
                className='text-gray-500 text-sm'
              >
                Current Employer
                <span className='text-red-500'>*</span>
              </label>
              <input
                id='currentEmployer'
                type='text'
                className='p-1 border rounded focus:outline-primary focus:outline-double'
                value={form.currentEmployer}
                onChange={handleChange}
                required
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor='noticePeriod' className='text-gray-500 text-sm'>
                Notice Period (In days)
                <span className='text-red-500'>*</span>
              </label>
              <input
                id='noticePeriod'
                type='number'
                className='p-1 border rounded focus:outline-primary focus:outline-double'
                value={form.noticePeriod}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div
            className='col-md-12 mb-3 border-2 border-dashed my-2 rounded-lg p-3'
            onClick={handleBoxClick}
          >
            <div className='flex justify-center cursor-pointer'>
              <UploadSharp />
            </div>
            <input
              type='file'
              className='hidden'
              ref={fileInputRef}
              onChange={handleFileChange}
              required
            />
            <p className='text-center mt-2'>
              <span className='text-primary mr-2'>Upload Your Resume</span>
              or Drag and drop your resume here, or{' '}
              <span
                className='text-primary cursor-pointer'
                onClick={handleBoxClick}
              >
                click to choose file
              </span>
              .
            </p>
            <h5 className='text-primary text-center'>
              Only .doc, .docx, .pdf, .odt, .rtf
            </h5>
            <div className='invalid-feedback text-center'>
              Please upload your resume.
            </div>
          </div>
          {selectedFileName && (
            <p className='text-center mt-2 text-gray-600'>
              Selected file: {selectedFileName}
            </p>
          )}

          <div className='flex gap-2 justify-center mt-4'>
            <Link href={'/careers'}>
              <button
                type='button'
                className=' border py-1 px-4 rounded-md border-black hover:bg-gray-200 transition'
              >
                Cancel
              </button>
            </Link>
            <button
              type='submit'
              className='bg-primary text-white border py-1 px-4 hover:bg-blue-800 transition-colors rounded-lg shadow-md '
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplication;
