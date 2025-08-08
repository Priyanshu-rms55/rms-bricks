import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `Hi RMS Construction,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}

I would like to know more about your services.`;
    
    const whatsappUrl = `https://wa.me/919934961155?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-4">Get In Touch</h2>
          <p className="text-xl text-cement-gray max-w-3xl mx-auto">
            Ready to start your project? Contact us today for a free consultation and quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-dark-gray mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brick-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-brick-red" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-gray mb-1">Phone Numbers</h4>
                  <div className="space-y-1">
                    <a href="tel:9934961155" className="block text-cement-gray hover:text-brick-red transition-colors duration-300">
                      +91 99349 61155 (Primary)
                    </a>
                    <a href="tel:9430426155" className="block text-cement-gray hover:text-brick-red transition-colors duration-300">
                      +91 94304 26155 (Secondary)
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brick-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-brick-red" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-gray mb-1">Email Address</h4>
                  <a 
                    href="mailto:chandanrms9934@gmail.com"
                    className="text-cement-gray hover:text-brick-red transition-colors duration-300"
                  >
                    chandanrms9934@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brick-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-brick-red" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-gray mb-1">Address</h4>
                  <p className="text-cement-gray leading-relaxed">
                    Anandipatty Katting Chowk<br />
                    Pipra Bazar, Supaul<br />
                    Bihar, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brick-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-brick-red" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-gray mb-1">Business Hours</h4>
                  <div className="text-cement-gray space-y-1">
                    <p>Monday - Saturday: 8:00 AM - 7:00 PM</p>
                    <p>Sunday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <a
                href="tel:9934961155"
                className="w-full bg-brick-red text-white py-3 px-6 rounded-lg hover:bg-brick-red/90 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
              
              <a
                href={`https://wa.me/919934961155?text=Hi, I'm interested in your construction services. Please provide more details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <MessageSquare size={20} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-dark-gray mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dark-gray mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brick-red focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-dark-gray mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brick-red focus:border-transparent transition-all duration-300"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-gray mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brick-red focus:border-transparent transition-all duration-300"
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-gray mb-2">
                  Service Required
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brick-red focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  <option value="Brick Supply">Brick Supply</option>
                  <option value="Construction Materials">Construction Materials</option>
                  <option value="Complete Construction">Complete Construction</option>
                  <option value="Foundation Work">Foundation Work</option>
                  <option value="Renovation">Renovation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-gray mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brick-red focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brick-red text-white py-3 px-6 rounded-lg hover:bg-brick-red/90 transition-colors duration-300 flex items-center justify-center space-x-2 font-semibold"
              >
                <Send size={20} />
                <span>Send Message via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-dark-gray text-center mb-8">Find Us Here</h3>
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57323.45234!2d86.9!3d26.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e8f8f8f8f8f8f8%3A0x8f8f8f8f8f8f8f8f!2sSupaul%2C%20Bihar%2C%20India!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RMS Bricks & Construction Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;