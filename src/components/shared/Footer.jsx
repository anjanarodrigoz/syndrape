import { Link } from 'react-router-dom';
import { SITE_CONFIG, NAVIGATION } from '@/constants/content';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* White accent glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-5">
            <h3 className="text-2xl font-bold mb-4 text-white">{SITE_CONFIG.name}</h3>
            <p className="text-white/60 text-base mb-6 max-w-md leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{SITE_CONFIG.email}</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="font-semibold mb-6 text-white text-lg">Services</h4>
            <ul className="space-y-4">
              {NAVIGATION.services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span>{service.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-semibold mb-6 text-white text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-white/60 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span>Home</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-white/60 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span>Projects</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/60 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span>Contact</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-semibold mb-6 text-white text-lg">Stay Updated</h4>
            <p className="text-white/60 text-sm mb-4">Get the latest updates on fashion tech innovations.</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
