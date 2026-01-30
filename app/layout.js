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
    default: "Aerial Bir Travel - Best Paragliding & Adventure Tours in Bir Billing, Himachal Pradesh",
    template: "%s | Aerial Bir Travel"
  },
  description: "⭐ #1 Travel Agency in Bir Billing! Book paragliding, trekking, camping & hotel packages. 10,000+ happy travelers. Expert guides. Best prices. Call +91-98765-43210",
  keywords: [
    // Primary Keywords
    "Bir Billing paragliding",
    "Bir Billing travel agency",
    "paragliding in Himachal Pradesh",
    "adventure tours Bir Billing",
    "Bir Billing tour packages",
    // Location-based Keywords
    "things to do in Bir Billing",
    "Bir Billing hotels booking",
    "Barot camping packages",
    "Himachal Pradesh adventure travel",
    "Kangra valley tours",
    // Service Keywords
    "paragliding booking Bir",
    "riverside camping Barot",
    "Hanuman Garh trek",
    "monastery tours Bir",
    "adventure activities Himachal",
    // Long-tail Keywords
    "best time to visit Bir Billing",
    "Bir Billing paragliding cost",
    "affordable hotels in Bir",
    "Barot sightseeing tour packages",
    "trekking packages Himachal Pradesh"
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
        "telephone": "+91-98765-43210",
        "email": "info@aerialbirtravel.com",
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
          "reviewCount": "850",
          "bestRating": "5",
          "worstRating": "1"
        },
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
        "telephone": "+91-98765-43210",
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
          }
        ]
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
