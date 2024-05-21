import React from 'react';
import CollaboratorsBanks from './CollaboratorsBanks';

const Collaborators = () => {
  return (
    <div
      className='flex flex-col md:flex-row text-white w-full mt-20'
      id='collaborators'
    >
      <div className='bg-primary md:w-2/5 flex flex-col gap-3 items-center justify-center text-center text-xl md:text-2xl lg:text-3xl font-semibold py-5'>
        <div>
          <h1>Our</h1>
          <h1>Collaborators</h1>
        </div>
        <div>
          <h1>Banks & </h1>
          <h1>NBFC’s</h1>
        </div>
      </div>
      <div className='md:w-3/5'>
        <CollaboratorsBanks />
      </div>
    </div>
  );
};

export default Collaborators;
