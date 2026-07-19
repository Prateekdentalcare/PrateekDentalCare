import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import DetailedServices from '../../components/DetailedServices';

export const metadata: Metadata = {
  title: 'Dental Services in Wakad, Pune',
  description:
    'Explore dental services at Prateek Dental Care in Wakad, Pune including root canal treatment, implants, orthodontics, fillings, dentures, whitening, and preventive care.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative rounded-b-[3rem] bg-gray-900 pb-12">
        <Navbar />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 pt-32 pb-20 text-center md:px-16">
          <h1 className="mb-6 font-display text-4xl font-medium text-white md:text-5xl lg:text-6xl">
            Our <span className="text-[#48b5c4]">Services</span>
          </h1>
          <p className="mx-auto max-w-2xl text-[15px] font-light leading-relaxed text-gray-300">
            We offer comprehensive dental care tailored to your needs. Discover our wide range of professional
            treatments designed to give you a healthy, confident smile.
          </p>
        </div>
      </div>
      <div className="bg-white">
        <DetailedServices />
      </div>
    </div>
  );
}
