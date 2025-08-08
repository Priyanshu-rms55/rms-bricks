import React, { useState, useRef } from 'react';
import { Phone, ArrowRight, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const Products = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const videoRef = useRef(null);

  const products = [
    {
      name: 'Premium Bricks',
      description: 'High-quality red clay bricks with excellent durability and thermal properties. Perfect for all construction needs.',
      video: '/WhatsApp Video 2025-08-08 at 18.07.14_4284fb37.mp4',
      features: ['High Compressive Strength', 'Weather Resistant', 'Uniform Size', 'Cost Effective']
    },
    {
      name: 'Premium Cement',
      description: 'High-grade Portland cement ensuring maximum strength and durability for your construction projects.',
      images: [
        '/Screenshot 2025-08-08 151206.png',
        '/Screenshot 2025-08-08 151224.png',
        '/Screenshot 2025-08-08 151413.png'
      ],
      features: ['High Strength', 'Quick Setting', 'Superior Bonding', 'Quality Assured']
    },
    {
      name: 'Sariya (Steel Rods)',
      description: 'Premium quality steel reinforcement bars for structural strength and earthquake resistance.',
      images: [
        '/Screenshot 2025-08-08 150806.png',
        '/Screenshot 2025-08-08 150830.png',
        '/Screenshot 2025-08-08 151008.png'
      ],
      features: ['High Tensile Strength', 'Corrosion Resistant', 'IS Standard Compliant', 'Various Sizes Available']
    },
    {
      name: 'Gitti (Crushed Stone)',
      description: 'Premium quality crushed stone aggregate for concrete mixing and construction foundation work.',
      images: [
        '/Screenshot 2025-08-08 151506.png',
        '/Screenshot 2025-08-08 151522.png',
        '/Screenshot 2025-08-08 151536.png'
      ],
      features: ['Uniform Grading', 'Clean & Washed', 'Multiple Sizes', 'High Strength']
    },
    {
      name: 'Balu (Fine Sand)',
      description: 'High-quality river sand perfect for concrete, plastering, and other construction applications.',
      image: '/Screenshot 2025-08-08 151112.png',
      features: ['Fine Grade', 'Clean & Sieved', 'Low Silt Content', 'Construction Grade']
    },
    {
      name: 'Construction Materials',
      description: 'Complete range of construction materials including tiles, pipes, fittings, and hardware.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Wide Range', 'Quality Products', 'Competitive Prices', 'Bulk Supply']
    }
  ];

  const nextImage = (images) => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = (images) => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="products" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-4">Our Products</h2>
          <p className="text-xl text-cement-gray max-w-3xl mx-auto">
            Premium quality construction materials sourced from trusted suppliers and tested for excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                {product.video ? (
                  // Video for Premium Bricks section
                  <div className="relative">
                    <video
                      ref={videoRef}
                      src={product.video}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                      muted={isVideoMuted}
                      loop
                      onPlay={() => setIsVideoPlaying(true)}
                      onPause={() => setIsVideoPlaying(false)}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => {
                          const video = videoRef.current;
                          if (video) {
                            if (isVideoPlaying) {
                              video.pause();
                            } else {
                              video.play();
                            }
                          }
                        }}
                        className="bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                      >
                        {isVideoPlaying ? <Pause size={24} /> : <Play size={24} />}
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        const video = videoRef.current;
                        if (video) {
                          setIsVideoMuted(!isVideoMuted);
                          video.muted = !isVideoMuted;
                        }
                      }}
                      className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      {isVideoMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </button>
                  </div>
                ) : product.images ? (
                  // Multiple images for Sariya section
                  <div className="relative">
                    <img
                      src={product.images[currentImageIndex]}
                      alt={`${product.name} - Image ${currentImageIndex + 1}`}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    {product.images.length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage(product.images!)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={() => nextImage(product.images!)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
                        >
                          <ChevronRight size={20} />
                        </button>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                          {product.images.map((_, idx) => (
                            <div
                              key={idx}
                              className={`w-2 h-2 rounded-full ${
                                idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  // Single image for other products
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                )}
                <div className="absolute top-4 right-4 bg-brick-red text-white px-3 py-1 rounded-full text-sm font-medium">
                  Premium
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-gray mb-3">{product.name}</h3>
                <p className="text-cement-gray mb-4 leading-relaxed">{product.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brick-red rounded-full"></div>
                      <span className="text-sm text-cement-gray">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex space-x-3">
                  <a
                    href="tel:9934961155"
                    className="flex-1 bg-brick-red text-white py-2 px-4 rounded-lg hover:bg-brick-red/90 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Phone size={16} />
                    <span>Call</span>
                  </a>
                  <a
                    href={`https://wa.me/919934961155?text=Hi, I'm interested in ${product.name}. Please provide more details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-brick-red text-brick-red py-2 px-4 rounded-lg hover:bg-brick-red hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>WhatsApp</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-dark-gray mb-4">Need Bulk Quantities?</h3>
            <p className="text-cement-gray mb-6">
              Contact us for special pricing on bulk orders and wholesale supply.
            </p>
            <a
              href="tel:9934961155"
              className="bg-brick-red text-white px-8 py-3 rounded-lg hover:bg-brick-red/90 transition-colors duration-300 inline-flex items-center space-x-2"
            >
              <Phone size={20} />
              <span>Get Bulk Quote</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;