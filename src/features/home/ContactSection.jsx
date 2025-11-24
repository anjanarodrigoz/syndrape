import { useState } from 'react';
import { CONTACT, SITE_CONFIG } from '@/constants/content';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, Mail, ArrowRight } from 'lucide-react';

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
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* White accent glows */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-white/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-white/70">Get In Touch</span>
            </div>
            <h2 className="text-display-3 md:text-display-2 font-bold text-white">
              {CONTACT.headline}
            </h2>
            <p className="text-white/60 text-lg">
              Let's discuss how we can help transform your fashion business.
            </p>
          </div>

          {/* Contact form card */}
          <div className="rounded-3xl bg-[#141414] border border-white/10 p-8 md:p-12 shadow-card">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-white/80 text-sm font-medium">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="email" className="text-white/80 text-sm font-medium">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="company" className="text-white/80 text-sm font-medium">Company</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="projectDetails" className="text-white/80 text-sm font-medium">Project Details *</Label>
                <Textarea
                  id="projectDetails"
                  name="projectDetails"
                  required
                  value={formData.projectDetails}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>

              <Button type="submit" size="xl" className="w-full group">
                {CONTACT.submitText}
                <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>

          {/* Alternative contact */}
          <div className="mt-10 text-center">
            <p className="text-white/50 mb-4">
              Prefer email?
            </p>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
            >
              <span className="font-medium">{SITE_CONFIG.email}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
