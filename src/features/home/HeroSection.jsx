import { HERO_CONTENT } from '@/constants/content';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea65c441?w=1920&h=1080&fit=crop&q=80"
          alt="Fashion Design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* White accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          {/* Animated badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/80">Next-Gen Fashion Technology</span>
          </div>

          {/* Main headline */}
          <h1 className="text-display-2 md:text-display-1 font-bold leading-tight text-white opacity-0 animate-slide-up">
            {HERO_CONTENT.headline}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto opacity-0 animate-slide-up animation-delay-200">
            Transforming fashion design with cutting-edge 3D technology and AI-powered solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-6 opacity-0 animate-slide-up animation-delay-300">
            <Button
              size="xl"
              onClick={scrollToContact}
              className="group min-w-[200px]"
            >
              {HERO_CONTENT.cta}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
            </Button>
            <Button
              size="xl"
              variant="outline"
              onClick={() => {
                const element = document.querySelector('#services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="min-w-[200px]"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
}
