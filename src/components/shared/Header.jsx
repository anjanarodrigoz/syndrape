import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { SITE_CONFIG, NAVIGATION } from '@/constants/content';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = `/${sectionId}`;
    } else {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-black/90 backdrop-blur-xl border-b border-white/10'
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight hover:text-primary transition-colors">
            {SITE_CONFIG.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              to="/"
              className="text-sm font-medium text-white/80 transition-colors hover:text-white relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            <button
              onClick={() => scrollToSection('#services')}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
            <Link
              to="/projects"
              className="text-sm font-medium text-white/80 transition-colors hover:text-white relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            <button
              onClick={() => scrollToSection('#contact')}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
            <Button
              onClick={() => scrollToSection('#contact')}
              className="ml-4"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-6 pb-4 space-y-4 border-t border-white/10 mt-5 animate-fade-in">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block text-base font-medium text-white/80 transition-colors hover:text-primary py-2"
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection('#services')}
              className="block text-base font-medium text-white/80 transition-colors hover:text-primary w-full text-left py-2"
            >
              Services
            </button>
            <Link
              to="/projects"
              onClick={() => setIsMenuOpen(false)}
              className="block text-base font-medium text-white/80 transition-colors hover:text-primary py-2"
            >
              Projects
            </Link>
            <button
              onClick={() => scrollToSection('#contact')}
              className="block text-base font-medium text-white/80 transition-colors hover:text-primary w-full text-left py-2"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('#contact')}
              className="w-full mt-4"
            >
              Get a Quote
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
