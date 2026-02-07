'use client';

import { useState, useEffect } from 'react';
import { destinations } from '../../data/homeData';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { useParams } from 'next/navigation';

// SEO metadata will be injected via structured data in the component

function ImageGallery({ images, name }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gray-200">
        <img
          src={images[selectedImage]}
          alt={`${name} - ${selectedImage + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative h-24 rounded-lg overflow-hidden transition-all duration-200 ${
              selectedImage === index
                ? 'ring-4 ring-blue-500 scale-105'
                : 'hover:scale-105 opacity-70 hover:opacity-100'
            }`}
          >
            <img
              src={image}
              alt={`${name} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function ItinerarySection({ itinerary }) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Tour Itinerary</h2>
      <div className="space-y-4">
        {itinerary.map((day) => (
          <div
            key={day.day}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
              <h3 className="text-xl font-bold text-white">
                Day {day.day}: {day.title}
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {day.activities.map((activity, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DestinationDetail() {
  const params = useParams();
  const slug = params.slug;
  const destination = destinations.find((d) => d.slug === slug);

  // Update page metadata dynamically
  useEffect(() => {
    if (destination) {
      document.title = `${destination.name} Tour Packages & Travel Guide | Best Prices 2026 | Aerial Bir Travel`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `Explore ${destination.name} with Aerial Bir Travel! Complete ${destination.itinerary.length}-day itinerary, best time to visit, top attractions, hotel booking. ${destination.highlights.join(', ')}. Book Now!`);
      }
    }
  }, [destination]);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Destination Not Found</h1>
          <p className="text-gray-600 mb-8">The destination you're looking for doesn't exist.</p>
          <a
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Go Back Home
          </a>
        </div>
      </div>
    );
  }

  // Structured data for this specific destination
  const destinationStructuredData = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": destination.name,
    "description": destination.longDescription,
    "url": `https://aerialbirtravel.com/explore/${destination.slug}`,
    "image": destination.images.map(img => `https://aerialbirtravel.com${img}`),
    "touristType": ["Adventure Travelers", "Nature Lovers", "Culture Enthusiasts", "Photographers"],
    "includesAttraction": destination.highlights.map(highlight => ({
      "@type": "TouristAttraction",
      "name": highlight
    }))
  };

  const tourPackageSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": `${destination.name} Tour Package`,
    "description": `Complete ${destination.itinerary.length}-day tour package for ${destination.name} including all major attractions and activities`,
    "itinerary": destination.itinerary.map(day => ({
      "@type": "ItemList",
      "name": `Day ${day.day}: ${day.title}`,
      "description": day.activities.join(', ')
    })),
    "provider": {
      "@type": "TravelAgency",
      "name": "Aerial Bir Travel",
      "url": "https://aerialbirtravel.com"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "url": `https://aerialbirtravel.com/explore/${destination.slug}`,
      "priceCurrency": "INR"
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Inject structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(destinationStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourPackageSchema) }}
      />
      
      <Navigation />

      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{destination.name}</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
              {destination.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Image Gallery */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
              <ImageGallery images={destination.images} name={destination.name} />
            </section>

            {/* About Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About {destination.name}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {destination.longDescription}
              </p>
            </section>

            {/* Itinerary */}
            <section>
              <ItinerarySection itinerary={destination.itinerary} />
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Quick Info Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Info</h3>
                
                {/* Best Time to Visit */}
                <div className="mb-6">
                  <div className="flex items-center text-gray-600 mb-2">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">Best Time to Visit</span>
                  </div>
                  <p className="text-gray-700 ml-7">{destination.bestTime}</p>
                </div>

                {/* Duration */}
                <div className="mb-6">
                  <div className="flex items-center text-gray-600 mb-2">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">Duration</span>
                  </div>
                  <p className="text-gray-700 ml-7">{destination.itinerary.length} Days / {destination.itinerary.length - 1} Nights</p>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Top Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg p-6 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Explore?</h3>
                <p className="mb-6 text-blue-100">
                  Book your trip to {destination.name} today and create unforgettable memories!
                </p>
                <a
                  href="/#contact"
                  className="block w-full text-center bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
                >
                  Book Now
                </a>
                <a
                  href="/#contact"
                  className="block w-full text-center border-2 border-white text-white py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 mt-3"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
