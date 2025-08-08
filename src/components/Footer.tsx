import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Products', id: 'products' },
    { name: 'Services', id: 'services' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' }
  ];

  const services = [
    'Premium Bricks',
    'Cement Supply',
    'Steel Rods (Sariya)',
    'Construction Services',
    'Foundation Work',
    'Renovation'
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-gray text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-brick-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">RMS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">RMS Bricks & Construction</h3>
                <p className="text-gray-400">Quality from Foundation to Finish</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for premium construction materials and complete building solutions 
              in Supaul, Bihar. We are committed to delivering quality products and services that 
              exceed your expectations.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="text-brick-red" size={18} />
                <div>
                  <a href="tel:9934961155" className="hover:text-brick-red transition-colors duration-300">
                    +91 99349 61155
                  </a>
                  {' / '}
                  <a href="tel:9430426155" className="hover:text-brick-red transition-colors duration-300">
                    +91 94304 26155
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-brick-red" size={18} />
                <a 
                  href="mailto:chandanrms9934@gmail.com"
                  className="hover:text-brick-red transition-colors duration-300"
                >
                  chandanrms9934@gmail.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="text-brick-red mt-1" size={18} />
                <address className="not-italic text-gray-300">
                  Anandipatty Katting Chowk<br />
                  Pipra Bazar, Supaul, Bihar, India
                </address>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-brick-red transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Business Hours & Social */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Business Hours */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Saturday:</span>
                  <span>8:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>

            {/* Social & CTA */}
            <div className="text-right">
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex justify-end space-x-4 mb-6">
                <a
                  href={`https://wa.me/919934961155`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                >
                  <MessageSquare size={20} />
                </a>
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                  <Facebook size={20} />
                </div>
                <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors duration-300 cursor-pointer">
                  <Instagram size={20} />
                </div>
              </div>
              
              <div className="space-y-3">
                <a
                  href="tel:9934961155"
                  className="block bg-brick-red text-white px-6 py-2 rounded-lg hover:bg-brick-red/90 transition-colors duration-300"
                >
                  Call for Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 RMS Bricks & Construction. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span>Owned by Mr. Chandan Kumar (Chunnu Singh)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;