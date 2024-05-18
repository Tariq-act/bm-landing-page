import React from 'react';

interface CustomSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icon?: React.ComponentType<{ className?: string }>;
}

const SelectInput: React.FC<CustomSelectProps> = ({
  icon: Icon,
  className,
  ...props
}) => {
  return (
    <div
      className={`relative flex items-center border-b border-gray-400 py-2 transition-all duration-300 ease-in-out ${className}`}
    >
      <select
        {...props}
        className='appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none'
      >
        {props.children}
      </select>
      {Icon && (
        <Icon className='absolute right-0 mr-2 text-gray-600 pointer-events-none' />
      )}
    </div>
  );
};

export default SelectInput;
