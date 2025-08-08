import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Products', id: 'products' },
    { name: 'Services', id: 'services' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center space-x-6 text-sm text-cement-gray">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>9934961155</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>chandanrms9934@gmail.com</span>
            </div>
          </div>
          <div className="text-sm text-cement-gray">
            Anandipatty Katting Chowk, Pipra Bazar, Supaul, Bihar
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-brick-red rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">RMS</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-dark-gray">RMS Bricks & Construction</h1>
              <p className="text-sm text-cement-gray">Quality from Foundation to Finish</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-dark-gray hover:text-brick-red transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Quick Contact Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:9934961155"
              className="bg-brick-red text-white px-4 py-2 rounded-lg hover:bg-brick-red/90 transition-colors duration-300 flex items-center space-x-2"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200 bg-white">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-dark-gray hover:text-brick-red transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-200 mt-4">
              <a
                href="tel:9934961155"
                className="flex items-center justify-center space-x-2 bg-brick-red text-white py-3 rounded-lg"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;