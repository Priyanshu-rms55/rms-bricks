import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Supaul, Bihar',
      rating: 5,
      text: 'RMS Construction built our dream home with exceptional quality. Mr. Chandan and his team were professional, timely, and delivered exactly what they promised. The bricks and materials used were of premium quality.',
      project: 'Residential House Construction'
    },
    {
      name: 'Priya Sharma',
      location: 'Pipra Bazar, Bihar',
      rating: 5,
      text: 'We needed bulk bricks for our commercial project. RMS provided excellent quality bricks at competitive prices with timely delivery. Their customer service is outstanding and very reliable.',
      project: 'Commercial Building Materials'
    },
    {
      name: 'Amit Singh',
      location: 'Madhepura, Bihar',
      rating: 5,
      text: 'Outstanding construction services! From foundation to finishing, everything was done with precision. The quality of work and attention to detail is commendable. Highly recommend RMS Construction.',
      project: 'Complete House Construction'
    },
    {
      name: 'Sunita Devi',
      location: 'Supaul, Bihar',
      rating: 5,
      text: 'RMS supplied all construction materials for our home. The quality of cement, sariya, and other materials was excellent. Fair pricing and honest dealing. Very satisfied with their service.',
      project: 'Construction Materials Supply'
    },
    {
      name: 'Manoj Kumar',
      location: 'Araria, Bihar',
      rating: 5,
      text: 'Renovation work was completed beautifully. The team understood our requirements perfectly and delivered beyond expectations. Professional approach and quality work at reasonable prices.',
      project: 'Home Renovation'
    },
    {
      name: 'Ravi Prakash',
      location: 'Saharsa, Bihar',
      rating: 5,
      text: 'Been purchasing bricks from RMS for years. Consistent quality, reliable supply, and excellent customer support. Mr. Chandan is very cooperative and ensures customer satisfaction always.',
      project: 'Regular Brick Supply'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-4">What Our Customers Say</h2>
          <p className="text-xl text-cement-gray max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-light-gray p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="text-brick-red/30" size={32} />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={18} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-cement-gray mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Project Type */}
              <div className="mb-4">
                <span className="bg-sand-beige text-brick-red px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.project}
                </span>
              </div>

              {/* Customer Info */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-dark-gray">{testimonial.name}</h4>
                    <p className="text-sm text-cement-gray">{testimonial.location}</p>
                  </div>
                  <div className="w-12 h-12 bg-brick-red/10 rounded-full flex items-center justify-center">
                    <span className="text-brick-red font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          {[
            { number: '500+', label: 'Happy Customers' },
            { number: '50+', label: 'Projects Completed' },
            { number: '15+', label: 'Years Experience' },
            { number: '99%', label: 'Customer Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-brick-red mb-2">{stat.number}</div>
              <div className="text-cement-gray font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-sand-beige/30 p-8 rounded-2xl inline-block">
            <h3 className="text-2xl font-bold text-dark-gray mb-4">Join Our Satisfied Customers</h3>
            <p className="text-cement-gray mb-6 max-w-2xl">
              Experience the same quality and service that our customers love. Get started on your project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9934961155"
                className="bg-brick-red text-white px-6 py-3 rounded-lg hover:bg-brick-red/90 transition-colors duration-300 font-semibold"
              >
                Call for Quote
              </a>
              <a
                href={`https://wa.me/919934961155?text=Hi, I would like to know more about your services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-brick-red text-brick-red px-6 py-3 rounded-lg hover:bg-brick-red hover:text-white transition-all duration-300 font-semibold"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;