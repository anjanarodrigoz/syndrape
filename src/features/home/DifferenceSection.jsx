import { DIFFERENCE } from '@/constants/content';
import { Sparkles, Cpu, Layers } from 'lucide-react';

export default function DifferenceSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* White accent glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-white/70">Why Choose Us</span>
            </div>

            <h2 className="text-display-3 md:text-display-2 font-bold text-white">
              {DIFFERENCE.headline}
            </h2>

            <h3 className="text-2xl font-semibold text-primary">
              {DIFFERENCE.subheadline}
            </h3>

            <div className="space-y-5 text-white/60 text-lg leading-relaxed">
              {DIFFERENCE.body.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-colors">
                <Cpu className="w-8 h-8 text-white mb-3" />
                <h4 className="text-white font-semibold mb-1">AI-Powered</h4>
                <p className="text-white/50 text-sm">Advanced machine learning algorithms</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-colors">
                <Layers className="w-8 h-8 text-white mb-3" />
                <h4 className="text-white font-semibold mb-1">3D Technology</h4>
                <p className="text-white/50 text-sm">Precision digital twin creation</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&h=800&fit=crop&q=80"
                alt="Digital Twin Technology"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent" />

              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center space-y-6">
                  <div className="text-7xl font-bold text-white drop-shadow-2xl animate-float">3D</div>
                  <div className="h-px w-40 bg-white/30 mx-auto" />
                  <div className="text-3xl font-semibold text-white drop-shadow-lg">
                    Digital Twins
                  </div>
                  <div className="h-px w-40 bg-white/30 mx-auto" />
                  <div className="text-7xl font-bold text-white drop-shadow-2xl animate-float animation-delay-300">AI</div>
                </div>
              </div>

              {/* White glow overlay on hover */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-white/20 rounded-3xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-white/20 rounded-3xl -z-10" />

            {/* Floating accent */}
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-2 h-20 bg-white rounded-full blur-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
