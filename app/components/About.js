import { aboutContent, stats } from '../data/homeData';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {aboutContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {aboutContent.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {aboutContent.mission}
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h3>
            <ul className="space-y-3">
              {aboutContent.values.map((value, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span className="text-lg text-gray-600">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

