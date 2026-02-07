// Dynamic data for Aerial Bir Travel homepage
// This data can later be moved to a CMS or API

export const companyInfo = {
  name: "Aerial Bir Travel",
  tagline: "Soar Above the Clouds, Explore the Himalayas",
  location: "Bir Billing, Himachal Pradesh, India",
  description: "Your trusted travel partner for paragliding adventures, mountain expeditions, and unforgettable experiences in the heart of the Himalayas.",
  founded: "2015",
  travelersServed: "10,000+",
  destinations: "50+",
  rating: "4.9/5"
};

export const heroData = {
  title: "Discover the Magic of Bir Billing",
  subtitle: "Experience the Asia's highest paragliding site and explore the breathtaking beauty of the Himalayas",
  ctaPrimary: "Book Your Adventure",
  ctaSecondary: "Explore Services",
  backgroundImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
};

export const services = [
  {
    id: 1,
    title: "Hotel Booking",
    description:
      "We offer comfortable and affordable hotel bookings with clean rooms, great locations, and easy reservations to make your stay relaxing and worry-free.",
    icon: "🏨",
    image: "/assets/services/hotel.avif"
  },
  {
    id: 2,
    title: "Adventure Activities",
    description:
      "Experience thrill and fun with paragliding, bungee jumping, sky cycling, and go-karting under expert guidance with full safety.",
    icon: "🪂",
    image:
      "/assets/services/paragliding.jpg",
  },
  {
    id: 3,
    title: "Sightseeing Tours",
    description:
      "Explore peaceful and beautiful places like Chougan Monastery, Bhattu Monastery, and Chauntra Monastery, surrounded by nature, culture, and spiritual calm.",
    icon: "🏛️",
    image:
      "/assets/services/monastrey.jpg",
  },
  {
    id: 4,
    title: "Trekking Sites",
    description:
      "Explore scenic treks like Hanuman Garh Trek, Dynasar Trek, and Bada Bhangal Trek, offering nature, adventure, and unforgettable mountain views.",
    icon: "🥾",
    image:
      "/assets/services/hanumangarh.jpg",
  },
  {
    id: 5,
    title: "Barot Sightseeing",
    description:
      "Barot sightseeing offers serene rivers, lush green valleys, waterfalls, forests, dams, and peaceful villages—perfect for nature lovers, photography, camping, trout fishing, and a relaxing Himalayan escape.",
    icon: "🌄",
    image:
      "/assets/services/reservoirs.jpg",
  },
  {
    id: 6,
    title: "Transport Facilities",
    description:
      "We provide reliable and comfortable transport services across India with well-maintained cars and buses, along with ticket booking and complete travel support.",
    icon: "🚗",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
  },
  {
    id: 7,
    title: "Riverside Camping in Barot",
    description:
      "Enjoy the best riverside camping in Barot with scenic mountain views, peaceful flowing rivers, lush forests, starry nights, cozy tents, bonfires, and fresh air—perfect for nature lovers.",
    icon: "⛺",
    image:
      "/assets/services/riverside_camping.jpg",
  }
];

export const destinations = [
  {
    id: 1,
    slug: "chamba-dalhousie",
    name: "Chamba & Dalhousie",
    description: "Experience the charm of colonial architecture, ancient temples, and scenic meadows in Chamba valley.",
    longDescription: "Chamba and Dalhousie offer a perfect blend of natural beauty, ancient heritage, and colonial charm. Nestled in the Himachal Pradesh mountains, these twin destinations provide breathtaking views, serene landscapes, and rich cultural experiences. From the lush meadows of Khajjiar to the spiritual ambiance of ancient temples, this region promises an unforgettable Himalayan adventure.",
    images: [
      "/assets/destinations/Chamba/Bhuri Singh Museum Chamba.jpg",
      "/assets/destinations/Chamba/Chamba chaugan destination Himachal Pradesh.jpg",
      "/assets/destinations/Chamba/subhash baoli.jpg",
      "/assets/destinations/Chamba/dalhose mall road.jpg",
      "/assets/destinations/Chamba/kailash.jpg"
    ],
    highlights: ["Khajjiar Lake", "Lakshmi Narayan Temple", "Dalhousie Mall Road", "Chamba Chaugan"],
    bestTime: "March - June, September - November",
    itinerary: [
      { day: 1, title: "Arrival in Dalhousie", activities: ["Check-in to hotel", "Evening walk at Mall Road", "Visit Subhash Baoli", "Explore local markets"] },
      { day: 2, title: "Khajjiar Excursion", activities: ["Morning drive to Khajjiar (Mini Switzerland)", "Khajjiar Lake visit", "Kalatop Wildlife Sanctuary", "Adventure activities"] },
      { day: 3, title: "Chamba Exploration", activities: ["Visit Lakshmi Narayan Temple", "Bhuri Singh Museum", "Chamba Chaugan", "Rang Mahal Palace"] },
      { day: 4, title: "Departure", activities: ["Morning leisure", "Shopping for local handicrafts", "Departure"] }
    ]
  },
  {
    id: 2,
    slug: "dharamshala",
    name: "Dharamshala",
    description: "Home to the Dalai Lama, this hill station offers a perfect blend of spirituality and natural beauty.",
    longDescription: "Dharamshala, the spiritual heart of Tibetan Buddhism in India, offers a unique blend of natural beauty, cultural richness, and spiritual serenity. From the bustling McLeod Ganj to the challenging Triund trek, this destination captivates visitors with its monasteries, waterfalls, and panoramic Himalayan views.",
    images: [
      "/assets/destinations/DharamShala/day-hiking-camping-point.jpg",
      "/assets/destinations/DharamShala/dharam shala cricket stedium.jpg",
      "/assets/destinations/DharamShala/Dal Lake Dharamshala.jpg",
      "/assets/destinations/DharamShala/Bhagsu waterfall dharamshala.png",
      "/assets/destinations/DharamShala/NAMGAYAL MONESTRY PERSONAL MONESTRY OF DLAILAMA.png"
    ],
    highlights: ["McLeod Ganj", "Triund Trek", "Tibetan Museum", "Bhagsu Waterfall"],
    bestTime: "Year-round",
    itinerary: [
      { day: 1, title: "Arrival & McLeod Ganj", activities: ["Arrival in Dharamshala", "Check-in to hotel", "Explore McLeod Ganj", "Visit Dalai Lama Temple Complex", "Namgyal Monastery"] },
      { day: 2, title: "Triund Trek", activities: ["Early morning start for Triund trek", "Trek through scenic landscapes", "Reach Triund top", "Camping under the stars (optional)", "Return by evening"] },
      { day: 3, title: "Local Sightseeing", activities: ["Bhagsu Waterfall", "Dal Lake", "Cricket Stadium", "Tibet Museum", "Local cafes and shopping"] },
      { day: 4, title: "Departure", activities: ["Morning leisure", "Shopping at Tibetan markets", "Departure"] }
    ]
  },
  {
    id: 3,
    slug: "kinnaur",
    name: "Kinnaur",
    description: "A land of orchards, ancient monasteries, and breathtaking valleys nestled in the Trans-Himalayan region.",
    longDescription: "Kinnaur is a mystical land of apple orchards, ancient temples, and dramatic mountain landscapes. This remote Himalayan region offers pristine natural beauty, unique cultural experiences, and challenging treks. From the scenic Sangla Valley to the spiritual heights of the Rupin Pass, Kinnaur promises an adventure off the beaten path.",
    images: [
      "/assets/destinations/kinnaur/Baspa river  view.jpg",
      "/assets/destinations/kinnaur/rupin-valley.jpg",
      "/assets/destinations/kinnaur/rupin-pass (3).jpg",
      "/assets/destinations/kinnaur/way-to-trek-for-rupin (1).jpg",
      "/assets/destinations/kinnaur/rupin-pass1.jpg"
    ],
    highlights: ["Kalpa", "Sangla Valley", "Nako Lake", "Rupin Pass Trek"],
    bestTime: "April - October",
    itinerary: [
      { day: 1, title: "Journey to Kalpa", activities: ["Drive from Shimla to Kalpa", "En route views of Kinnaur Kailash", "Check-in at Kalpa", "Evening views of Kinner Kailash range"] },
      { day: 2, title: "Sangla Valley", activities: ["Drive to Sangla Valley", "Visit Baspa River", "Explore Kamru Fort", "Visit Buddhist Monastery", "Apple orchards walk"] },
      { day: 3, title: "Chitkul & Nako", activities: ["Visit Chitkul (last village)", "Drive to Nako Lake", "Visit Nako Monastery", "Explore Nako village"] },
      { day: 4, title: "Rupin Pass Base", activities: ["Trek preparation", "Drive to Rupin Pass base", "Short acclimatization trek", "Overnight at base camp"] },
      { day: 5, title: "Return Journey", activities: ["Morning views", "Return journey", "Departure"] }
    ]
  },
  {
    id: 4,
    slug: "kullu-manali",
    name: "Kullu Manali",
    description: "A popular hill station known for adventure sports, ancient temples, and scenic beauty.",
    longDescription: "Kullu Manali is the adventure capital of Himachal Pradesh, offering everything from snow-capped peaks to lush valleys, ancient temples to modern adventure sports. Whether you're seeking spiritual solace or adrenaline-pumping activities, this destination has it all. The scenic Rohtang Pass, adventure hub of Solang Valley, and spiritual Hadimba Temple make it a complete Himalayan experience.",
    images: [
      "/assets/destinations/kullu manali/Roerich Art Gallery From Manali 2.jpg",
      "/assets/destinations/kullu manali/Manu Temple2.jpg",
      "/assets/destinations/kullu manali/Vaishno devi temple kullu.jpg",
      "/assets/destinations/kullu manali/river rafting point kullu.avif",
      "/assets/destinations/kullu manali/solang.jpg"
    ],
    highlights: ["Rohtang Pass", "Solang Valley", "Hadimba Temple", "River Rafting"],
    bestTime: "April - June, October - February",
    itinerary: [
      { day: 1, title: "Arrival in Manali", activities: ["Arrival and check-in", "Visit Hadimba Temple", "Explore Manali Mall Road", "Manu Temple visit", "Evening at leisure"] },
      { day: 2, title: "Solang Valley Adventure", activities: ["Full day at Solang Valley", "Paragliding", "Zorbing", "Cable car ride", "Adventure sports activities"] },
      { day: 3, title: "Rohtang Pass Excursion", activities: ["Early morning drive to Rohtang Pass", "Snow activities", "Photography", "Return via Rahala Falls", "Evening in Old Manali"] },
      { day: 4, title: "Kullu Sightseeing", activities: ["Drive to Kullu", "River rafting in Beas", "Visit Raghunath Temple", "Kullu shawl shopping", "Local markets"] },
      { day: 5, title: "Departure", activities: ["Morning leisure", "Shopping", "Departure"] }
    ]
  },
  {
    id: 5,
    slug: "lahaul",
    name: "Lahaul",
    description: "Remote valley offering pristine high-altitude landscapes, ancient monasteries, and adventure trails.",
    longDescription: "Lahaul is a remote Himalayan valley that offers pristine natural beauty, ancient Buddhist culture, and challenging high-altitude adventures. With crystal-clear lakes, dramatic mountain passes, and centuries-old monasteries, Lahaul provides an authentic off-the-beaten-path Himalayan experience for adventurous travelers.",
    images: [
      "/assets/destinations/Lhaul/Lake.jpg",
      "/assets/destinations/Lhaul/sissu road view.jpg",
      "/assets/destinations/Lhaul/sissu_himachal_pradesh_golden_wheels.jpg",
      "/assets/destinations/Lhaul/waterfall.jpg",
      "/assets/destinations/Lhaul/tandi sungm.jpg"
    ],
    highlights: ["Baralacha La Pass", "Sissu Waterfall", "Trilokinath Temple", "Suraj Tal Lake"],
    bestTime: "June - September",
    itinerary: [
      { day: 1, title: "Manali to Keylong", activities: ["Drive through Atal Tunnel", "Visit Sissu Waterfall", "Arrive in Keylong", "Visit Kardang Monastery", "Evening in Keylong town"] },
      { day: 2, title: "Jispa & Surroundings", activities: ["Drive to Jispa", "Visit Deepak Tal", "Explore Jispa village", "Photography sessions", "Short nature walks"] },
      { day: 3, title: "Baralacha La & Suraj Tal", activities: ["Drive to Baralacha La Pass", "Visit Suraj Tal Lake", "High altitude photography", "Return to Keylong", "Evening at leisure"] },
      { day: 4, title: "Udaipur & Trilokinath", activities: ["Visit Trilokinath Temple", "Explore Udaipur town", "Mrikula Devi Temple", "Local cultural experiences"] },
      { day: 5, title: "Return Journey", activities: ["Morning views", "Drive back via Atal Tunnel", "Departure"] }
    ]
  },
  {
    id: 6,
    slug: "spiti-valley",
    name: "Spiti Valley",
    description: "A cold desert mountain valley offering breathtaking landscapes and ancient monasteries.",
    longDescription: "Spiti Valley, often called 'Little Tibet', is a cold desert mountain valley that offers surreal landscapes, ancient Buddhist monasteries, and a glimpse into a unique Himalayan culture. With its barren mountains, pristine lakes, and timeless villages, Spiti is a destination for those seeking adventure, spirituality, and solitude in one of the most remote regions of India.",
    images: [
      "/assets/destinations/sapiti/spiti-tour-chicham-bridge.jpg",
      "/assets/destinations/sapiti/Approaching_Chandrataal.jpg",
      "/assets/destinations/sapiti/dhankar-gompa2.jpg",
      "/assets/destinations/sapiti/heighest village in the world spiti.jpg",
      "/assets/destinations/sapiti/KEY MONESTRY SPITI.jpg"
    ],
    highlights: ["Key Monastery", "Chandratal Lake", "Kibber Village", "Tabo Monastery"],
    bestTime: "May - October",
    itinerary: [
      { day: 1, title: "Shimla to Kaza", activities: ["Long drive via Kinnaur", "Cross Kunzum Pass", "Arrive in Kaza", "Acclimatization", "Evening rest"] },
      { day: 2, title: "Kaza Monastery Circuit", activities: ["Visit Key Monastery", "Kibber Village (highest motorable village)", "Chicham Bridge", "Komic Monastery", "Return to Kaza"] },
      { day: 3, title: "Pin Valley Exploration", activities: ["Drive to Pin Valley", "Pin Valley National Park", "Kungri Monastery", "Snow leopard habitat area", "Local villages"] },
      { day: 4, title: "Tabo & Dhankar", activities: ["Visit Tabo Monastery (UNESCO)", "1000-year-old murals", "Dhankar Monastery", "Dhankar Lake trek", "Photography"] },
      { day: 5, title: "Chandratal Lake", activities: ["Early morning drive to Chandratal", "Full day at the lake", "Camping near lake", "Stargazing", "Photography"] },
      { day: 6, title: "Return Journey", activities: ["Morning at Chandratal", "Drive back", "Departure"] }
    ]
  },
  {
    id: 7,
    slug: "shimla",
    name: "Shimla",
    description: "The former summer capital of British India, known for its colonial architecture and pleasant climate.",
    longDescription: "Shimla, the Queen of Hills, is a timeless destination that showcases colonial architecture, scenic beauty, and a pleasant climate year-round. Once the summer capital of British India, Shimla retains its old-world charm with heritage buildings, mall roads, and panoramic views of the Himalayas. It's perfect for both history enthusiasts and nature lovers.",
    images: [
      "/assets/destinations/shimla/state-museum-exterior.jpg",
      "/assets/destinations/shimla/himachal-state-museum-and-library-himachal-pradesh-1-attr-hero.jpg",
      "/assets/destinations/shimla/viceregal-lodge-turned.jpg",
      "/assets/destinations/shimla/hanuman temple 3.jpg",
      "/assets/destinations/shimla/The_Ridge_Shimla_5.jpg"
    ],
    highlights: ["The Ridge", "Jakhu Temple", "Mall Road", "Viceregal Lodge"],
    bestTime: "Year-round",
    itinerary: [
      { day: 1, title: "Arrival & Mall Road", activities: ["Arrival in Shimla", "Check-in to hotel", "Evening walk at Mall Road", "Visit The Ridge", "Shopping at Lakkar Bazaar"] },
      { day: 2, title: "Heritage Tour", activities: ["Viceregal Lodge (Rashtrapati Niwas)", "State Museum", "Christ Church", "Gaiety Theater", "Scandal Point"] },
      { day: 3, title: "Jakhu & Surroundings", activities: ["Morning trek to Jakhu Temple", "Hanuman Temple visit", "Panoramic views", "Visit Annandale", "Evening at leisure"] },
      { day: 4, title: "Kufri Excursion", activities: ["Day trip to Kufri", "Horse riding", "Himalayan Nature Park", "Adventure activities", "Return to Shimla"] },
      { day: 5, title: "Departure", activities: ["Toy train ride (optional)", "Last-minute shopping", "Departure"] }
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Mumbai, India",
    rating: 5,
    text: "An absolutely incredible experience! The paragliding was breathtaking, and the guides were professional and friendly. Bir Billing is truly magical.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    date: "March 2024"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi, India",
    rating: 5,
    text: "Best travel agency in Bir! They organized everything perfectly - from paragliding to trekking. Highly recommend their adventure packages.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    date: "February 2024"
  },
  {
    id: 3,
    name: "Emily Chen",
    location: "Singapore",
    rating: 5,
    text: "The cultural tour was amazing! We visited beautiful monasteries and learned so much about Tibetan culture. The team made our trip unforgettable.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    date: "January 2024"
  },
  {
    id: 4,
    name: "Michael Brown",
    location: "London, UK",
    rating: 5,
    text: "As a photographer, I was blown away by the photography tour. The guides knew all the best spots and the timing was perfect. Stunning results!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    date: "December 2023"
  },
  {
    id: 5,
    name: "Priya Sharma",
    location: "Bangalore, India",
    rating: 5,
    text: "The camping and stargazing experience was out of this world! Literally. The night sky was incredible, and the team was so knowledgeable.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
    date: "November 2023"
  },
  {
    id: 6,
    name: "David Wilson",
    location: "Sydney, Australia",
    rating: 5,
    text: "Professional, safe, and fun! The mountain trekking was challenging but rewarding. The guides ensured our safety throughout. Will definitely return!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    date: "October 2023"
  }
];

export const stats = [
  { label: "Happy Travelers", value: "10,000+" },
  { label: "Destinations", value: "50+" },
  { label: "Years of Experience", value: "9+" },
  { label: "Customer Rating", value: "4.9/5" }
];

export const contactInfo = {
  phone: "+91 78071 89316",
  email: "chanderaerialbirtravel@gmail.com",
  address: "Bir Billing, District Kangra, Himachal Pradesh, India - 176077",
  socialMedia: {
    facebook: "https://facebook.com/aerialbirtravel",
    instagram: "https://instagram.com/aerialbirtravel",
    twitter: "https://twitter.com/aerialbirtravel",
    youtube: "https://youtube.com/aerialbirtravel"
  },
  workingHours: {
    weekdays: "9:00 AM - 7:00 PM",
    weekends: "8:00 AM - 8:00 PM"
  }
};

export const aboutContent = {
  title: "Your Adventure Starts Here",
  description: "Aerial Bir Travel was founded with a passion for adventure and a deep love for the Himalayas. Based in Bir Billing, we specialize in creating unforgettable experiences that combine the thrill of paragliding with the beauty of mountain exploration.",
  mission: "To provide safe, memorable, and authentic travel experiences that connect people with the natural beauty and rich culture of the Himalayas.",
  values: [
    "Safety First - Your well-being is our top priority",
    "Authentic Experiences - Real adventures, real memories",
    "Local Expertise - Deep knowledge of the region",
    "Sustainable Tourism - Respecting nature and local communities"
  ]
};

