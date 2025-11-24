import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Zap } from 'lucide-react';

export default function ServicePageTemplate({ service }) {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-black" />

        {/* White accent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-white/70">Service</span>
            </div>
            <h1 className="text-display-2 md:text-display-1 font-bold text-white">{service.title}</h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
              {service.description}
            </p>
            <Button size="xl" onClick={scrollToContact} className="group mt-4">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-display-4 md:text-display-3 font-bold text-white">{service.overview.headline}</h2>
            <p className="text-xl text-white/60 leading-relaxed">
              {service.overview.body}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* White accent glow */}
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 space-y-6">
              <h2 className="text-display-3 font-bold text-white">Key Features</h2>
              <p className="text-white/60 text-xl">What makes our service stand out</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-5 p-8 rounded-3xl bg-[#141414] border border-white/10 hover:border-white/40 transition-all duration-300 hover:shadow-card-hover group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-white/80 transition-colors">{feature.title}</h3>
                    <p className="text-white/60 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 space-y-6">
              <h2 className="text-display-3 font-bold text-white">Our Work</h2>
              <p className="text-white/60 text-xl">See what we've created</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.galleryImages?.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-3xl border border-white/10 overflow-hidden group hover:border-white/40 transition-all duration-500 hover:shadow-card-hover"
                >
                  <img
                    src={image}
                    alt={`${service.title} example ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* White accent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-display-3 font-bold text-white">Ready to Get Started?</h2>
            <p className="text-xl text-white/60 leading-relaxed">
              Let's discuss how we can bring your vision to life with {service.title.toLowerCase()}.
            </p>
            <Button size="xl" onClick={scrollToContact} className="group">
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
