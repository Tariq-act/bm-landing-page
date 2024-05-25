'use client';
import Testimonials from '@/components/Testimonials';
import AboutSection from '@/components/About';
import Collaborators from '@/components/Collaborators';
import Enquiry from '@/components/Enquiry';
import LeadingImpact from '@/components/LeadingImpact';
import Navbar from '@/components/Navbar';
import OurServices from '@/components/OurServices';
import OurUsps from '@/components/OurUsps';
import { ArrowUpward } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import MyNexus from '@/components/MyNexus';

export default function Home() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      <Navbar />
      <Enquiry />
      <AboutSection />
      <LeadingImpact />
      <OurUsps />
      <OurServices />
      <Collaborators />
      <MyNexus />
      <Testimonials />
      <Footer />

      <button
        onClick={handleScrollToTop}
        className={`${
          isSticky ? 'fixed' : 'hidden'
        } bottom-10 right-10 p-2 md:p-3 bg-secondary text-white rounded-full transition-opacity duration-300 z-50`}
      >
        <ArrowUpward />
      </button>
    </main>
  );
}
