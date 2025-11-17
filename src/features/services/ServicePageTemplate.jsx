import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function ServicePageTemplate({ service }) {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">{service.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold">{service.overview.headline}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.overview.body}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 rounded-lg bg-background border border-border hover:border-accent/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.galleryImages?.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg border border-border overflow-hidden group"
                >
                  <img
                    src={image}
                    alt={`${service.title} example ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how we can bring your vision to life with {service.title.toLowerCase()}.
            </p>
            <Button size="lg" onClick={scrollToContact}>
              Get a Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
