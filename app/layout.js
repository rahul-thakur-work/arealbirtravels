import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://aerialbirtravel.com'),
  title: {
    default: "Bir Billing Paragliding & Tour Packages | Dharamshala Manali Tours | Aerial Bir Travel",
    template: "%s | Aerial Bir Travel - Best Himachal Tour Packages"
  },
  description: "⭐ #1 Rated Travel Agency! Bir Billing Paragliding (₹2,500+), Dharamshala Tours, Manali Packages, Spiti Valley Trips. 10,000+ Happy Travelers. Book Now! Expert Guides | Best Prices | Free Consultation",
  keywords: [
    // Primary Bir Billing Keywords
    "Bir Billing paragliding",
    "paragliding in Bir Billing online booking",
    "Bir Billing tour packages",
    "best travel agency Bir Billing",
    "Bir Billing paragliding cost 2026",
    "Bir paragliding booking",
    "things to do in Bir Billing",
    "Bir Billing hotels",
    "Bir Billing adventure activities",
    
    // Dharamshala Keywords
    "Dharamshala tour packages",
    "Dharamshala McLeod Ganj tours",
    "Triund trek booking",
    "Dharamshala sightseeing packages",
    "Dharamshala travel agency",
    "best time to visit Dharamshala",
    "Dharamshala Triund trek package",
    "McLeod Ganj hotels booking",
    
    // Manali Keywords
    "Manali tour packages",
    "Kullu Manali honeymoon packages",
    "Manali trekking packages",
    "Rohtang Pass tour",
    "Solang Valley activities",
    "Manali adventure tours",
    "Shimla Manali package tour",
    "Manali hotels booking",
    
    // Spiti & Lahaul Keywords
    "Spiti Valley tour packages",
    "Lahaul Spiti bike trip",
    "Chandratal Lake camping",
    "Kinnaur Spiti tour",
    
    // Himachal General Keywords
    "Himachal Pradesh tour packages",
    "Himachal adventure tours",
    "Himachal trekking packages 2026",
    "best travel agency Himachal Pradesh",
    
    // Long-tail Conversional Keywords
    "affordable paragliding packages Bir Billing",
    "best paragliding company near me",
    "Bir Billing paragliding with video",
    "family tour packages Himachal",
    "honeymoon packages Manali budget",
    "group tour packages Dharamshala Manali",
    "riverside camping Barot valley",
    "monastery tour Bir Billing",
    
    // Seasonal Keywords
    "summer tour packages Himachal 2026",
    "winter activities Manali",
    "monsoon trekking Himachal"
  ],
  authors: [{ name: "Aerial Bir Travel" }],
  creator: "Aerial Bir Travel",
  publisher: "Aerial Bir Travel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aerialbirtravel.com",
    siteName: "Aerial Bir Travel",
    title: "Aerial Bir Travel - Best Paragliding & Adventure Tours in Bir Billing",
    description: "⭐ Top-rated travel agency in Bir Billing! Book paragliding adventures, trekking tours, riverside camping & complete travel packages. 10,000+ satisfied travelers. Expert local guides.",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Aerial Bir Travel - Paragliding and Adventure Tours in Bir Billing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aerial Bir Travel - Best Paragliding & Adventure Tours in Bir Billing",
    description: "⭐ Top-rated travel agency in Bir Billing! Book paragliding, trekking, camping & hotel packages. 10,000+ happy travelers.",
    images: ["/assets/logo.png"],
    creator: "@aerialbirtravel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "https://aerialbirtravel.com",
  },
  category: "Travel & Tourism",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": "https://aerialbirtravel.com/#organization",
        "name": "Aerial Bir Travel",
        "url": "https://aerialbirtravel.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://aerialbirtravel.com/assets/logo.png",
          "width": 250,
          "height": 60
        },
        "image": "https://aerialbirtravel.com/assets/logo.png",
        "description": "Premier travel agency in Bir Billing offering paragliding, adventure tours, trekking, camping, and complete travel packages in Himachal Pradesh.",
        "telephone": "+91-78071 89316",
        "email": "chanderaerialbirtravel@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bir Billing",
          "addressLocality": "Bir",
          "addressRegion": "Himachal Pradesh",
          "postalCode": "176077",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 32.0522,
          "longitude": 76.7241
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "19:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday", "Sunday"],
            "opens": "08:00",
            "closes": "20:00"
          }
        ],
        "priceRange": "₹₹",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1200",
          "bestRating": "5",
          "worstRating": "1"
        },
        "hasMap": "https://maps.google.com/?q=Bir+Billing+Himachal+Pradesh",
        "foundingDate": "2015",
        "slogan": "Soar Above the Clouds, Explore the Himalayas",
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 32.0522,
            "longitude": 76.7241
          },
          "geoRadius": "200000"
        },
        "sameAs": [
          "https://facebook.com/aerialbirtravel",
          "https://instagram.com/aerialbirtravel",
          "https://twitter.com/aerialbirtravel",
          "https://youtube.com/aerialbirtravel"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://aerialbirtravel.com/#localbusiness",
        "name": "Aerial Bir Travel",
        "image": "https://aerialbirtravel.com/assets/logo.png",
        "@id": "https://aerialbirtravel.com",
        "url": "https://aerialbirtravel.com",
        "telephone": "+91-78071 89316",
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bir Billing, District Kangra",
          "addressLocality": "Bir",
          "addressRegion": "HP",
          "postalCode": "176077",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 32.0522,
          "longitude": 76.7241
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://aerialbirtravel.com/#website",
        "url": "https://aerialbirtravel.com",
        "name": "Aerial Bir Travel",
        "description": "Best travel agency in Bir Billing for paragliding, trekking, and adventure tours",
        "publisher": {
          "@id": "https://aerialbirtravel.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://aerialbirtravel.com/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Paragliding Tours",
        "provider": {
          "@id": "https://aerialbirtravel.com/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Bir Billing"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Travel Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Paragliding in Bir Billing",
                "description": "Experience world-class paragliding at Asia's highest paragliding site"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hotel Booking",
                "description": "Comfortable and affordable hotel accommodations in Bir Billing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Trekking Tours",
                "description": "Guided trekking expeditions including Hanuman Garh, Dynasar, and Bada Bhangal"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Riverside Camping",
                "description": "Scenic riverside camping experiences in Barot valley"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the best time to visit Bir Billing for paragliding?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best time for paragliding in Bir Billing is from March to June and September to November. During these months, weather conditions are ideal with clear skies and favorable wind patterns."
            }
          },
          {
            "@type": "Question",
            "name": "How much does paragliding cost in Bir Billing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Paragliding costs in Bir Billing typically range from ₹2,500 to ₹3,500 per person for a tandem flight with an experienced pilot. Package deals including accommodation and multiple activities are also available."
            }
          },
          {
            "@type": "Question",
            "name": "Is paragliding in Bir Billing safe?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, paragliding in Bir Billing is very safe when done with certified and experienced pilots. Aerial Bir Travel works only with licensed professionals who follow strict safety protocols and use high-quality equipment."
            }
          },
          {
            "@type": "Question",
            "name": "What other activities are available in Bir Billing besides paragliding?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Besides paragliding, Bir Billing offers trekking (Hanuman Garh, Dynasar), monastery tours, riverside camping in Barot, mountain biking, nature walks, and visits to local Tibetan settlements and tea gardens."
            }
          },
          {
            "@type": "Question",
            "name": "How do I book a tour package for Dharamshala and Manali?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can book Dharamshala and Manali tour packages directly through Aerial Bir Travel by calling +91-78071 89316 or using our online contact form. We offer customized packages including transportation, accommodation, sightseeing, and adventure activities."
            }
          },
          {
            "@type": "Question",
            "name": "What is included in Spiti Valley tour packages?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our Spiti Valley tour packages include transportation, accommodation, meals, sightseeing of Key Monastery, Chandratal Lake, Kibber Village, Tabo Monastery, local permits, and experienced guides. Tours typically range from 6-10 days."
            }
          }
        ]
      },
      {
        "@type": "Product",
        "name": "Bir Billing Paragliding Package",
        "description": "Professional paragliding experience in Bir Billing with certified pilots, safety equipment, and video recording",
        "brand": {
          "@type": "Brand",
          "name": "Aerial Bir Travel"
        },
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "2500",
          "highPrice": "3500",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://aerialbirtravel.com/#services"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "450"
        }
      },
      {
        "@type": "TouristTrip",
        "name": "Complete Himachal Tour Package",
        "description": "Comprehensive tour covering Bir Billing, Dharamshala, Manali, and Spiti Valley with all activities included",
        "itinerary": {
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "TouristDestination",
              "name": "Bir Billing",
              "description": "Paragliding capital of India"
            },
            {
              "@type": "TouristDestination", 
              "name": "Dharamshala",
              "description": "Home of Dalai Lama and McLeod Ganj"
            },
            {
              "@type": "TouristDestination",
              "name": "Manali",
              "description": "Adventure and honeymoon destination"
            }
          ]
        },
        "provider": {
          "@id": "https://aerialbirtravel.com/#organization"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
