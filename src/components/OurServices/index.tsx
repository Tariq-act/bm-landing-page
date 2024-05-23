import React from 'react';
import ServicesTabs from './ServicesTabs';

const OurServices = ({
  activeTab,
  handleServiceTabs,
}: {
  activeTab: number;
  handleServiceTabs: (index: number) => void;
}) => {
  return (
    <div id='our-services' className='mt-10 md:mt-20 flex flex-col gap-10'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='border-2 border-[#dfe4fd]  text-primary rounded-lg p-1 px-4 text-lg md:text-2xl mx-auto font-semibold mb-2'>
          Over Services
        </h1>
        <div>
          <h1 className='leading-relaxed text-2xl md:text-4xl text-center font-bold'>
            Outstanding loan Services
          </h1>
          <h1 className='text-2xl md:text-4xl text-center font-bold'>
            Tailored for Everyone
          </h1>
        </div>
      </div>
      <div className='mx-4 lg:mx-10 xl:mx-24'>
        <ServicesTabs
          activeTab={activeTab}
          handleServiceTabs={handleServiceTabs}
        />
      </div>
    </div>
  );
};

export default OurServices;
