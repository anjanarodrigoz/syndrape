import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { SITE_CONFIG, NAVIGATION } from '@/constants/content';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
    <header className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight">
            {SITE_CONFIG.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection('#services')}
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              Services
            </button>
            <Link
              to="/projects"
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              Projects
            </Link>
            <button
              onClick={() => scrollToSection('#contact')}
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              Contact
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
            className="md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3 border-t border-border mt-4">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block text-sm font-medium transition-colors hover:text-accent"
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection('#services')}
              className="block text-sm font-medium transition-colors hover:text-accent w-full text-left"
            >
              Services
            </button>
            <Link
              to="/projects"
              onClick={() => setIsMenuOpen(false)}
              className="block text-sm font-medium transition-colors hover:text-accent"
            >
              Projects
            </Link>
            <button
              onClick={() => scrollToSection('#contact')}
              className="block text-sm font-medium transition-colors hover:text-accent w-full text-left"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('#contact')}
              className="w-full"
            >
              Get a Quote
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
