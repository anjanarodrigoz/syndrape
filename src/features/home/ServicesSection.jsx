import { SERVICES } from '@/constants/content';
import ServiceCard from '@/components/shared/ServiceCard';

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Precision-engineered digital solutions for the fashion industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.shortTitle}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
