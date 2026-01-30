import { services } from '../data/homeData';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover a wide range of adventure activities and travel experiences tailored for every explorer
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              itemScope
              itemType="https://schema.org/Service"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} in Bir Billing - ${service.description.substring(0, 60)}...`}
                  title={service.title}
                  loading="lazy"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 text-3xl" role="img" aria-label={service.title}>
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3" itemProp="name">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed" itemProp="description">
                  {service.description}
                </p>
                {/* <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                    </svg>
                    {service.duration}
                  </span>
                  <span className="font-semibold text-blue-600">{service.price}</span>
                </div> */}
                <a
                  href="#contact"
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                  aria-label={`Book ${service.title} now`}
                >
                  Book Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

