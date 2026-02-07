'use client';

import { destinations } from '../data/homeData';
import { useState, useEffect } from 'react';
import Link from 'next/link';

function ImageSlider({ images, name }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-50 overflow-hidden bg-gray-200">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`${name} - ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div> */}
      
      {/* Title */}
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-2xl font-bold text-white mb-2">
          {name}
        </h3>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 right-4 flex gap-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white w-6' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the most beautiful and exciting destinations in the Himalayas
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Slider */}
              <ImageSlider images={destination.images} name={destination.name} />

              {/* Content */}
              <div className="p-6 flex flex-col justify-between">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {destination.description}
                </p>
                
                {/* Highlights */}
                <div className="flex h-auto justify-between h-full flex-col gap-2">
                  <div className="flex flex-col gap-2">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Best Time */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Best Time: {destination.bestTime}</span>
                  
                </div>
                </div>
                
                </div>
                <div className="flex gap-3">
                  <Link
                    href={`/explore/${destination.slug}`}
                    className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    View Details
                  </Link>
                  <a
                    href="#contact"
                    className="flex-1 text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Book Now
                  </a>
                </div>


              </div>

           
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

