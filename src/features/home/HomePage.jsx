import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import DifferenceSection from './DifferenceSection';
import WorkSection from './WorkSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <DifferenceSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
