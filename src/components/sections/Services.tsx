import React from 'react';
import { Home, Hammer, PaintBucket, Wrench, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Foundation Work',
      description: 'Complete foundation construction including excavation, concrete pouring, and structural work.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Site Survey', 'Excavation', 'Concrete Foundation', 'Waterproofing']
    },
    {
      icon: Hammer,
      title: 'Structural Construction',
      description: 'Complete structural work including walls, columns, beams, and roofing with premium materials.',
      image: 'https://images.pexels.com/photos/162539/architecture-building-construction-work-162539.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Wall Construction', 'Column & Beam Work', 'Roofing Solutions', 'Quality Assurance']
    },
    {
      icon: PaintBucket,
      title: 'Finishing Work',
      description: 'Interior and exterior finishing including plastering, painting, flooring, and final touches.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Plastering', 'Painting', 'Flooring', 'Interior Design']
    },
    {
      icon: Wrench,
      title: 'Renovation & Repair',
      description: 'Complete renovation services for existing structures including repairs and modernization.',
      image: 'https://images.pexels.com/photos/1292464/pexels-photo-1292464.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Structural Repairs', 'Modernization', 'Extension Work', 'Maintenance']
    }
  ];

  const projectTypes = [
    'Residential Houses',
    'Commercial Buildings',
    'Industrial Structures',
    'Renovations',
    'Government Projects',
    'Educational Buildings'
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-4">Our Construction Services</h2>
          <p className="text-xl text-cement-gray max-w-3xl mx-auto">
            Complete construction solutions from foundation to finishing - bringing your vision to life with quality and precision.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-light-gray rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-brick-red/10 rounded-lg flex items-center justify-center">
                      <service.icon className="text-brick-red" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-dark-gray">{service.title}</h3>
                  </div>
                  
                  <p className="text-cement-gray mb-4">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="text-brick-red" size={16} />
                        <span className="text-sm text-cement-gray">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Types */}
        <div className="bg-sand-beige/20 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-dark-gray text-center mb-8">We Handle All Types of Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center space-x-3"
              >
                <CheckCircle className="text-brick-red" size={20} />
                <span className="font-medium text-dark-gray">{type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-dark-gray text-center mb-12">Our Construction Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your requirements and vision' },
              { step: '02', title: 'Planning', desc: 'Detailed planning and design phase' },
              { step: '03', title: 'Construction', desc: 'Quality construction with regular updates' },
              { step: '04', title: 'Handover', desc: 'Final inspection and project handover' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brick-red text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-dark-gray mb-2">{process.title}</h4>
                <p className="text-cement-gray text-sm">{process.desc}</p>
                {index < 3 && (
                  <ArrowRight className="text-cement-gray mx-auto mt-4 hidden md:block" size={20} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-brick-red text-white p-8 rounded-2xl inline-block max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="mb-6">
              Get a free consultation and quote for your construction project. Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9934961155"
                className="bg-white text-brick-red px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Call for Free Quote
              </a>
              <a
                href={`https://wa.me/919934961155?text=Hi, I'm interested in your construction services. Please provide more details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-brick-red transition-all duration-300"
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

export default Services;