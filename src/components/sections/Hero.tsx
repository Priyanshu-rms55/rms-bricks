import React from 'react';
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen pt-20 bg-gradient-to-br from-light-gray via-white to-sand-beige/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-slide-up">
            <div className="mb-6">
              <span className="bg-brick-red/10 text-brick-red px-4 py-2 rounded-full text-sm font-medium">
                Your Trusted Construction Partner
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-gray mb-6 leading-tight">
              <span className="text-brick-red">Quality</span> from 
              <br />Foundation to <span className="text-brick-red">Finish</span>
            </h1>
            
            <p className="text-xl text-cement-gray mb-8 leading-relaxed">
              Premium bricks, construction materials, and complete building solutions in Supaul, Bihar. 
              Building dreams with excellence and reliability since inception.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                'Premium Quality Bricks',
                'Complete Construction Services',
                'Experienced Professionals',
                'Competitive Pricing'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-brick-red" size={20} />
                  <span className="text-dark-gray font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-brick-red text-white px-8 py-4 rounded-lg hover:bg-brick-red/90 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Get Quote</span>
                <ArrowRight size={20} />
              </button>
              
              <a
                href="tel:9934961155"
                className="border-2 border-brick-red text-brick-red px-8 py-4 rounded-lg hover:bg-brick-red hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 font-semibold"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              {[
                { number: '500+', label: 'Happy Clients' },
                { number: '50+', label: 'Projects Done' },
                { number: '15+', label: 'Years Experience' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-brick-red">{stat.number}</div>
                  <div className="text-sm text-cement-gray">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction site with modern building"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-sand-beige">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brick-red rounded-lg flex items-center justify-center">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-gray">Quality Assured</h3>
                    <p className="text-sm text-cement-gray">ISO Certified Materials</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-8 right-8 w-32 h-32 bg-sand-beige/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-16 right-16 w-24 h-24 bg-brick-red/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;