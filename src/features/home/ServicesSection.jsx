import { SERVICES } from '@/constants/content';
import ServiceCard from '@/components/shared/ServiceCard';

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* White accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm font-medium text-white/70">Our Services</span>
          </div>
          <h2 className="text-display-3 md:text-display-2 font-bold text-white">What We Do</h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Precision-engineered digital solutions for the fashion industry
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <ServiceCard
                title={service.shortTitle}
                description={service.description}
                link={service.link}
                image={service.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
