import React from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We never compromise on quality, using only the finest materials and proven construction techniques.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We build lasting relationships through exceptional service.'
    },
    {
      icon: Target,
      title: 'Precision Work',
      description: 'Every project is executed with meticulous attention to detail and professional expertise.'
    },
    {
      icon: Heart,
      title: 'Passion Driven',
      description: 'We are passionate about construction and take pride in every structure we help create.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-4">About RMS Construction</h2>
          <p className="text-xl text-cement-gray max-w-3xl mx-auto">
            Building trust, quality, and excellence in every brick we supply and every structure we construct.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Content */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-dark-gray mb-6">Our Story</h3>
            <div className="space-y-6 text-cement-gray leading-relaxed">
              <p>
                RMS Bricks & Construction was founded with a simple yet powerful vision: to provide 
                the highest quality construction materials and services to the people of Supaul and 
                surrounding areas in Bihar.
              </p>
              <p>
                Under the leadership of <strong className="text-dark-gray">Mr. Chandan Kumar (Chunnu Singh)</strong>, 
                our company has grown from a small brick supplier to a comprehensive construction solution provider. 
                We take pride in our commitment to excellence and our role in building the infrastructure of our community.
              </p>
              <p>
                Located in the heart of Anandipatty Katting Chowk, Pipra Bazar, we serve customers across 
                Supaul district with premium quality bricks, cement, sariya, and complete construction services. 
                Our team of experienced professionals ensures every project meets the highest standards of quality and durability.
              </p>
            </div>

            <div className="mt-8 p-6 bg-sand-beige/30 rounded-xl border-l-4 border-brick-red">
              <h4 className="font-semibold text-dark-gray mb-2">Our Mission</h4>
              <p className="text-cement-gray">
                To be the most trusted name in construction materials and services, delivering quality 
                that stands the test of time while building lasting relationships with our clients.
              </p>
            </div>
          </div>

          {/* Right - Owner Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Mr. Chandan Kumar - Owner of RMS Construction"
                className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
              />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl">
                <h4 className="font-bold text-dark-gray">Mr. Chandan Kumar</h4>
                <p className="text-cement-gray text-sm">Founder & Owner</p>
                <p className="text-sm text-cement-gray mt-2">
                  "Building dreams with integrity and excellence"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-light-gray hover:bg-sand-beige/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-brick-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="text-brick-red" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-dark-gray mb-3">{value.title}</h4>
              <p className="text-cement-gray">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;