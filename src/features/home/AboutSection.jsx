import { ABOUT } from '@/constants/content';
import { Users } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* White gradient accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white/70">About Us</span>
          </div>

          {/* Headline */}
          <h2 className="text-display-3 md:text-display-2 font-bold text-white">
            {ABOUT.headline}
          </h2>

          {/* Body */}
          <p className="text-xl leading-relaxed text-white/60 max-w-3xl mx-auto">
            {ABOUT.body}
          </p>

          {/* Stats or trust indicators */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-white/50 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-white/50 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-white/50 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
