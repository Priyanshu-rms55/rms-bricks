import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Modern residential construction project',
      category: 'Residential'
    },
    {
      src: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Premium quality bricks supply',
      category: 'Materials'
    },
    {
      src: 'https://images.pexels.com/photos/162539/architecture-building-construction-work-162539.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Construction site with steel framework',
      category: 'Construction'
    },
    {
      src: 'https://images.pexels.com/photos/1292464/pexels-photo-1292464.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Foundation work in progress',
      category: 'Foundation'
    },
    {
      src: 'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Commercial building construction',
      category: 'Commercial'
    },
    {
      src: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Completed residential project',
      category: 'Completed'
    },
    {
      src: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Quality cement and construction materials',
      category: 'Materials'
    },
    {
      src: 'https://images.pexels.com/photos/162539/architecture-building-construction-work-162539.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Modern construction techniques',
      category: 'Construction'
    }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Materials', 'Construction', 'Foundation', 'Completed'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-4">Our Work Gallery</h2>
          <p className="text-xl text-cement-gray max-w-3xl mx-auto">
            Explore our portfolio of completed projects and premium construction materials.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-brick-red text-white shadow-lg'
                  : 'bg-white text-cement-gray hover:text-brick-red hover:bg-sand-beige/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white font-medium mb-1">{image.category}</p>
                  <p className="text-sand-beige text-sm">Click to view</p>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-brick-red text-white px-3 py-1 rounded-full text-sm font-medium">
                {image.category}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-sand-beige z-10"
            >
              <X size={32} />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-sand-beige z-10"
            >
              <ChevronLeft size={32} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-sand-beige z-10"
            >
              <ChevronRight size={32} />
            </button>

            <div className="max-w-4xl max-h-full">
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />
              <div className="text-center mt-4">
                <p className="text-white font-medium">{filteredImages[selectedImage].alt}</p>
                <p className="text-sand-beige text-sm">{filteredImages[selectedImage].category}</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-cement-gray mb-4">Want to see your project featured here?</p>
          <a
            href="tel:9934961155"
            className="bg-brick-red text-white px-8 py-3 rounded-lg hover:bg-brick-red/90 transition-colors duration-300 inline-flex items-center space-x-2"
          >
            <span>Start Your Project</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;