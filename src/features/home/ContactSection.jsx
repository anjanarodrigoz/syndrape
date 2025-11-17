import { useState } from 'react';
import { CONTACT, SITE_CONFIG } from '@/constants/content';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = `New Quote Request from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nProject Details:\n${formData.projectDetails}`;
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {CONTACT.headline}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectDetails">Project Details *</Label>
              <Textarea
                id="projectDetails"
                name="projectDetails"
                required
                value={formData.projectDetails}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="bg-background min-h-[150px]"
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              {CONTACT.submitText}
            </Button>
          </form>

          <p className="text-center mt-8 text-muted-foreground">
            Or email us directly at{' '}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-accent hover:underline"
            >
              {SITE_CONFIG.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
