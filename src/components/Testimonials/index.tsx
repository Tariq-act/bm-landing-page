import React from 'react';
import TestimonialCard from './TestimonialCard';

import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

SwiperCore.use([Autoplay, Pagination, EffectFade]);

const data = [
  {
    description:
      'Overcame Challenges: Grateful for the Support in Securing My Loan Despite of trouble in banking Transactions! Made me get the personal loan in the most tough moment. Referred my Colleague for his new property loan.',
    name: 'Vasikar (Employee)',
    company: 'Carelon Global Solutions India LLP',
  },
  {
    description: `Absolute Happiness: I can't express my happiness enough! Despite my ITR challenges, they went above and beyond to secure mybusiness loan. A heartfelt thank you to the wonderful managmentfor standing with my profile after 2-3 rejections, till thedisbursal.`,
    name: 'Mr. G Sudhakar (M.D)',
    company: 'Shilpa Electrical Infra Tech India Pvt Ltd',
  },
  {
    description: ` Gratitude : They came to my rescue when my company was unlisted in
      banks, they listed AHA company in Bank to secure my personal loan
      just in time for my son's education. Forever thankful for the
      timely support and making dreams a reality!`,
    name: 'Hema Bindu (Employee)',
    company: 'Aha OTT Media',
  },
  {
    description: `Heartfelt Thanks: Despite CIBIL challenges, they worked their
      magic, processing my personal loan when I thought it was
      impossible, even with a top company job. Grateful for the
      unwavering support and turning my financial woes into a success
      story!.`,
    name: 'Mahati (Employee)',
    company: 'Genpact',
  },
  {
    description: `Bank Master rescued me during a financial crisis, securing an
      educational loan for my son studying abroad. Despite rejections
      due to a poor repayment history, they offered timely solutions and
      guidance. I highly recommend Bank Master as my trusted financial
      advisor.`,
    name: 'P Gopal (Businessman)',
    company: 'Saidutta Graphics',
  },
  {
    description: `As a government medical professional in Karnataka, I faced
      rejections for a personal loan everywhere. Bank Master not only
      provided the needed loan promptly but also guided me on improving
      my financial profile. I gladly recommend Bank Master as my trusted
      financial advisor.`,
    name: 'Saral (Employee)',
    company: 'staff Nurse',
  },
  {
    description: `  Bank Master rescued me from confusion among various lending banks
      and agencies. Their real-time loan eligibility assistance, backed
      by concrete data, instilled trust in making informed choices.
      Grateful for their invaluable support!.`,
    name: 'Benazir (Employee)',
    company: 'Tech Mahindra',
  },
];

const Testimonials = () => {
  return (
    <div className='mt-10'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='border-2 border-[#dfe4fd]  text-primary rounded-lg p-1 px-4 text-lg md:text-2xl mx-auto font-semibold mb-2'>
          Testimonials
        </h1>
        <h1 className='leading-relaxed text-2xl md:text-4xl text-center font-bold'>
          What Our Clients Say!
        </h1>
      </div>
      <div style={{ padding: '3rem' }}>
        <Swiper
          effect='fade'
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className='mySwiper'
        >
          {data.map((client, idx) => (
            <SwiperSlide key={idx}>
              <TestimonialCard
                description={client.description}
                name={client.name}
                company={client.company}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
