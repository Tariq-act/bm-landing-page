import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  AvTimer,
  Business,
  BusinessCenter,
  Check,
  LocationOn,
  Person,
  Phone,
} from '@mui/icons-material';

interface FormData {
  username: string;
  companyName: string;
  designation: string;
  mobileNumber: string;
  employeeCount: string;
  location: string;
}

const MOBILE_REGEX = /^\d{10}$/;
const ERROR_MESSAGES = {
  mobile: 'Mobile number must be exactly 10 digits',
  requiredFields: 'Please fill out all required and valid fields.',
};

const initialFormData: FormData = {
  username: '',
  companyName: '',
  designation: '',
  mobileNumber: '',
  employeeCount: '',
  location: '',
};

const MyNexus: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showRequiredFieldsAlert, setShowRequiredFieldsAlert] = useState(false);
  const [mobileError, setMobileError] = useState<string>('');

  const handleInputChange = (name: keyof FormData, value: string): void => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      setShowRequiredFieldsAlert(true);
      setTimeout(() => setShowRequiredFieldsAlert(false), 5000);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbzJ18kh_K5K5DpL3K7tIDeQXlDyh3N7o3R8DNzVPijwHJ1L5NNBLLsFAIELd2O5-riEwA/exec',
        {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'no-cors',
        }
      );

      await response.text();
      setFormData(initialFormData);
      setIsSuccess(true);
    } catch (error) {
      console.error('Error:', error);
      alert('Form submission failed');
    } finally {
      setIsLoading(false);
    }
  };

  const validateForm = (): boolean => {
    const isNameValid = formData.username.trim() !== '';
    const isCompanyValid = formData.companyName.trim() !== '';
    const isDesignationValid = formData.designation.trim() !== '';
    const isEmployeeCountValid = formData.employeeCount.trim() !== '';
    const isLocationValid = formData.location.trim() !== '';

    let isMobileValid = true;
    if (
      isNameValid &&
      isCompanyValid &&
      isDesignationValid &&
      isEmployeeCountValid &&
      isLocationValid
    ) {
      isMobileValid = MOBILE_REGEX.test(formData.mobileNumber);
      setMobileError(isMobileValid ? '' : ERROR_MESSAGES.mobile);
    } else {
      setMobileError('');
    }

    return (
      isNameValid &&
      isCompanyValid &&
      isDesignationValid &&
      isEmployeeCountValid &&
      isLocationValid &&
      isMobileValid
    );
  };

  return (
    <div className='my-4 md:my-28'>
      <div>
        <h1 className='text-center text-2xl mb-4 md:text-4xl text-primary font-semibold'>
          My Nexus - Company Tie-up
        </h1>
        <h2 className='text-center text-xl md:text-2xl font-semibold'>
          Connect us to collaborate for Company Tie-ups
        </h2>
      </div>

      <div
        className='flex flex-col lg:flex-row text-white mt-10 lg:gap-4 w-full'
        id='collaborators'
      >
        <div className='w-full lg:w-2/5 bg-secondary p-10 md:px-20 lg:rounded-tr-lg lg:rounded-br-lg'>
          <p className='mb-4 md:mb-8'>
            Elevate Corporate Prosperity: Partner with us for customized loans
            that meet your {`company's`} and {`employees'`} financial needs,
            leading to elevated corporate prosperity.
          </p>
          <ul className='flex flex-col gap-4'>
            <li>
              <Check /> <span>Enhanced Employee Benefits</span>
            </li>
            <li>
              <Check /> <span>Transparent Communication</span>
            </li>
            <li>
              <Check /> <span>Strategic Financial Planning</span>
            </li>
            <li>
              <Check /> <span>Exclusive Rates and Terms</span>
            </li>
            <li>
              <Check /> <span>Bulk Loan Processing</span>
            </li>
            <li>
              <Check /> <span>Holistic Financial Solutions</span>
            </li>
            <li>
              <Check /> <span>Optimize employee efficiency</span>
            </li>
          </ul>
        </div>
        <div className='w-full lg:w-3/5 bg-primary p-4 md:p-8 lg:rounded-tl-lg lg:rounded-bl-lg flex items-center justify-center'>
          <form
            id='contact-form'
            className='bg-white text-black p-8 rounded-lg'
            onSubmit={handleSubmit}
            noValidate
          >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <InputField
                name='username'
                value={formData.username}
                onChange={handleInputChange}
                placeholder='Your Name'
                icon={Person}
              />
              <InputField
                name='companyName'
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder='Company Name'
                icon={Business}
              />
              <InputField
                name='designation'
                value={formData.designation}
                onChange={handleInputChange}
                placeholder='Designation'
                icon={BusinessCenter}
              />
              <InputField
                name='mobileNumber'
                type='number'
                value={formData.mobileNumber}
                onChange={handleInputChange}
                placeholder='Mobile Number'
                icon={Phone}
              />
              <InputField
                name='employeeCount'
                type='number'
                value={formData.employeeCount}
                onChange={handleInputChange}
                placeholder='Employee Count'
                icon={AvTimer}
              />
              <InputField
                name='location'
                value={formData.location}
                onChange={handleInputChange}
                placeholder='Location'
                icon={LocationOn}
              />
            </div>
            <div className='flex flex-col items-center justify-center mt-4 w-full'>
              <div>
                <button
                  id='contact-form-button'
                  type='submit'
                  className='bg-secondary text-white px-4 py-2 rounded-lg'
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Submit'}
                </button>
              </div>

              {isSuccess && (
                <div
                  id='contact-form-success'
                  className='flex mt-2 text-secondary'
                >
                  Form submitted successfully!
                </div>
              )}
              {(showRequiredFieldsAlert || mobileError) && (
                <div className='text-red-500 mt-2'>
                  {showRequiredFieldsAlert
                    ? ERROR_MESSAGES.requiredFields
                    : mobileError}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

interface InputFieldProps {
  type?: string;
  name: keyof FormData;
  placeholder: string;
  icon: React.ElementType;
  value: string;
  onChange: (name: keyof FormData, value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type = 'text',
  name,
  placeholder,
  icon: Icon,
  value,
  onChange,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <div className='relative rounded-md'>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        className='p-2 border pr-8 border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
        placeholder={placeholder}
        required
        name={name}
      />
      <div className='absolute inset-y-0 right-1 pl-3 flex items-center pointer-events-none'>
        <Icon className='text-gray-400' />
      </div>
    </div>
  );
};

export default MyNexus;
