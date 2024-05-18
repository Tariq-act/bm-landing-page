import AboutSection from '@/components/About';
import Enquiry from '@/components/Enquiry';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className='pb-64'>
      <Navbar />
      <Enquiry />
      <AboutSection />
    </main>
  );
}
