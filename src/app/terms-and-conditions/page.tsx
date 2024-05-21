import Footer from '@/components/Footer';
import { KeyboardArrowRight } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';

const TermsAndConditions = () => {
  return (
    <div className='text-black'>
      <div className='p-2  md:p-10'>
        <div className='flex items-end justify-center text-center text-primary font-bold text-2xl md:text-3xl '>
          <Image src={'images/logo.svg'} width={50} height={50} alt='logo' />
          <h2 className=''>Terms & Conditions</h2>
        </div>
        <ul className='list-disc list-inside space-y-4 my-5 md:my-10 px-5 md:px-20'>
          <li className='flex items-start'>
            <KeyboardArrowRight className='mt-0.5' />{' '}
            <span className='ml-2'>
              In order to be eligible to refer someone to a service, the user
              must have registered with BM Innovations Private Limited (“the
              Company”).
            </span>
          </li>
          <li className='flex items-start'>
            <KeyboardArrowRight className='mt-0.5' />{' '}
            <span className='ml-2'>
              The earnings from referral can only be rewarded to the user upon
              successful receipt of service by the referred person.
            </span>
          </li>
          <li className='flex items-start'>
            <KeyboardArrowRight className='mt-0.5' />{' '}
            <span className='ml-2'>
              If the person being referred is already a client of the Company
              and has availed at least one service previously, the referring
              user will not receive referral rewards.
            </span>
          </li>
          <li className='flex items-start'>
            <KeyboardArrowRight className='mt-0.5' />{' '}
            <span className='ml-2'>
              If a person receives multiple referral links, only the first link
              in chronological order will be counted for validation.
            </span>
          </li>
          <li className='flex items-start'>
            <KeyboardArrowRight className='mt-0.5' />{' '}
            <span className='ml-2'>
              The Company reserves the right to allocate different reward values
              to different users and on different service categories.
            </span>
          </li>
          <li className='flex items-start'>
            <KeyboardArrowRight className='mt-0.5' />{' '}
            <span className='ml-2'>
              The Company reserves the right to declare any reward null at any
              point in time at its discretion.
            </span>
          </li>
          <li className='flex items-start'>
            <KeyboardArrowRight className='mt-0.5' />{' '}
            <span className='ml-2'>
              The Company reserves the right to block rewards for certain users
              at its discretion.
            </span>
          </li>
          <li className='flex items-start'>
            <KeyboardArrowRight className='mt-0.5' />{' '}
            <span className='ml-2'>
              The Company reserves the right to change the nature of the
              referral program and introduce other kinds of rewards for users.
            </span>
          </li>
          <li className='flex items-start'>
            <KeyboardArrowRight className='mt-0.5' />{' '}
            <span className='ml-2'>
              Any rewards earned as part of this program are strictly
              non-transferable and shall be used by the same user on the same
              device ID.
            </span>
          </li>
          <li className='flex items-start'>
            <KeyboardArrowRight className='mt-0.5' />{' '}
            <span className='ml-2'>
              For referral-related issues, please reach out on our website{' '}
              <Link
                href='http://www.bankmaster.in'
                className='text-green-400 hover:text-green-600'
                target='_blank'
              >
                www.bankmaster.in
              </Link>
              .
            </span>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
