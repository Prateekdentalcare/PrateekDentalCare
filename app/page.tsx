import type { Metadata } from 'next';
import Hero from '../components/Hero';
import Process from '../components/Process';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Features from '../components/Features';
import FeatureTreatment from '../components/FeatureTreatment';
import AdvancedCare from '../components/AdvancedCare';
import GoogleReviews from '../components/GoogleReviews';
import ScheduleConsultation from '../components/ScheduleConsultation';
import ClinicLocation from '../components/ClinicLocation';
import AnimateSectionsOnScroll from '../components/AnimateSectionsOnScroll';

export const metadata: Metadata = {
  title: 'Dental Clinic in Wakad, Pune',
  description:
    'Prateek Dental Care is a modern dental clinic in Wakad, Pune offering implants, root canal treatment, orthodontics, preventive care, and patient-focused dentistry.',
};

export default function HomePage() {
  return (
    <AnimateSectionsOnScroll className="home-page">
      <Hero />
      <Process />
      <AboutUs />
      <Services />
      <Features />
      <FeatureTreatment />
      <AdvancedCare />
      <GoogleReviews />
      <ScheduleConsultation />
      <ClinicLocation />
    </AnimateSectionsOnScroll>
  );
}
