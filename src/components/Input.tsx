import React from 'react';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ComponentType<{ className?: string }>;
}

const Input: React.FC<CustomInputProps> = ({ icon: Icon, ...props }) => {
  return (
    <div className='flex items-center border-b border-gray-400 py-2 transition-all duration-100 ease-in-out focus-within:border-secondary focus-within:border-b-2'>
      <input
        {...props}
        className='appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none'
      />
      {Icon && <Icon className='text-gray-600 mr-2' />}
    </div>
  );
};

export default Input;
