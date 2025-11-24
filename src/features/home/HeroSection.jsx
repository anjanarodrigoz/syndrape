import { HERO_CONTENT } from '@/constants/content';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Suspense, lazy } from 'react';

// Lazy load the 3D canvas
const ModelCanvas = lazy(() => import('@/components/3d/ModelCanvas'));

export default function HeroSection() {

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Text Content */}
          <div className="space-y-10 text-center lg:text-left order-2 lg:order-1 lg:col-span-2">
            {/* Animated badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white/80">Next-Gen Fashion Technology</span>
            </div>

            {/* Main headline */}
            <h1 className="text-display-4 md:text-display-3 font-bold leading-tight text-white opacity-0 animate-slide-up">
              {HERO_CONTENT.headline}
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-white/70 max-w-3xl opacity-0 animate-slide-up animation-delay-200">
              Transforming fashion design with cutting-edge 3D technology and AI-powered solutions
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center pt-6 opacity-0 animate-slide-up animation-delay-300">
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

          {/* Right side - 3D Model */}
          <div className="relative h-[600px] lg:h-[800px] opacity-0 animate-fade-in order-1 lg:order-2 lg:col-span-3 flex items-center justify-center lg:justify-end">
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin" />
              </div>
            }>
              <ModelCanvas
                modelPath="/models/over_shirt.glb"
                showControls={false}
                enableAutoRotate={false}
                enableOrbitControls={true}
                enableZoom={true}
                enablePan={true}
              />
            </Suspense>
          </div>
        </div>
      </div>

    </section>
  );
}
