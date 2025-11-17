import { ABOUT } from '@/constants/content';

export default function AboutSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">{ABOUT.headline}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {ABOUT.body}
          </p>
        </div>
      </div>
    </section>
  );
}
