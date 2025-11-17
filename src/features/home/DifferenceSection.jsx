import { DIFFERENCE } from '@/constants/content';

export default function DifferenceSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">{DIFFERENCE.headline}</h2>
            <h3 className="text-2xl font-semibold text-accent">
              {DIFFERENCE.subheadline}
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {DIFFERENCE.body.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-secondary via-accent/20 to-secondary border border-border overflow-hidden">
              <div className="w-full h-full flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-accent/20">3D</div>
                  <div className="h-px w-32 bg-border mx-auto" />
                  <div className="text-2xl font-semibold text-muted-foreground">
                    Digital Twins
                  </div>
                  <div className="h-px w-32 bg-border mx-auto" />
                  <div className="text-6xl font-bold text-accent/20">AI</div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-accent/30 rounded-lg -z-10" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-accent/30 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
