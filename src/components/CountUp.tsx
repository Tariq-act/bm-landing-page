'use client';

import React, { useEffect, useState } from 'react';

interface CountUpNumberProps {
  initialValue: number;
  duration?: number;
}

const CountUpNumber: React.FC<CountUpNumberProps> = ({
  initialValue,
  duration = 3000,
}) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let start = 0;
    const end = initialValue;
    let startTime: number | null = null;

    const countUp = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const increment = Math.floor((end - start) * (progress / duration));

      if (increment < end) {
        setCount(increment);
        requestAnimationFrame(countUp);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(countUp);

    return () => {
      // Cleanup
    };
  }, [initialValue, duration]);

  return (
    <div>
      <span className='relative text-3xl font-semibold text-primary'>
        <span className='absolute top-1 -left-2 w-5 h-5 bg-[#c3e190] rounded-full -z-10'></span>{' '}
        {count}
      </span>
    </div>
  );
};

export default CountUpNumber;
