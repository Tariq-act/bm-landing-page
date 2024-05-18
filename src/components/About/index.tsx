import Image from 'next/image';
import Tabs from './Tabs';

const AboutSection = () => {
  return (
    <div className='mt-20 md:mt-44 lg:mt-10 px-4' id='about'>
      <div className='flex flex-col items-center justify-center lg:flex-row gap-4'>
        <Image
          src='images/about.svg'
          alt='about'
          loading='lazy'
          width={500}
          height={500}
          className='border rounded-lg sm:border-none'
        />

        <div className='flex flex-col w-full lg:w-3/6'>
          <div>
            <h2 className='inline-block border rounded text-[#3B5998] font-semibold text-2xl mb-4 py-1 px-3'>
              About Us
            </h2>
          </div>
          <h1 className='text-3xl mb-2 font-semibold'>
            We Enhance Our Clients To Build Their
          </h1>
          <h1 className='text-4xl mb-2 font-semibold'>
            {' '}
            Strong Financial Profile
          </h1>
          <p className='mb-4'>
            {`Welcome to Bank Master your trusted partner in navigating the
              loans landscape with ease. At Bank Master, we're not just
              aggregating loans; we're transforming the way you access financial
              solutions—making it smarter, faster & personalized just for you.`}
          </p>
          <p className='mb-4'>{`We Enhance clients' financial profiles`}</p>
          <Tabs />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
