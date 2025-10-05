import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Manichiură Gel',
    price: '130',
    duration: '120 min',
    features: [
      'Îndepărtare cuticule',
      'Îngrijire unghii',
      'Aplicare gel',
      'Design inclus',
      'Masaj mâini'
    ]
  },
  {
    name: 'Manichiură Semi-Permanent',
    price: '100',
    duration: '90 min',
    features: [
      'Îndepărtare cuticule',
      'Îngrijire unghii',
      'Aplicare lac semi-permanent',
      'Culoare la alegere',
      'Finish lucios'
    ],
    popular: true
  },
  {
    name: 'Pedichiură',
    price: '100',
    duration: '60 min',
    features: [
      'Îngrijire completă picioare',
      'Îndepărtare cuticule',
      'Aplicare gel',
      'Masaj relaxant',
      'Hidratare intensivă'
    ]
  },
  {
    name: 'Pedichiură Spa',
    price: '150',
    duration: '90 min',
    features: [
      'Băi aromate cu săruri și uleiuri esențiale',
      'Exfoliere intensă și tratament pentru călcâie',
      'Îndepărtare calus și cuticule',
      'Masaj prelungit de relaxare',
      'Mască hidratantă pentru picioare',
      'Aplicare lac semi-permanent sau tratament lucios'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="preturi" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Prețuri
          </h2>
          <p className="text-lg text-gray-600">
            Servicii de calitate la prețuri accesibile
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl transition-all duration-300 ${
                pkg.popular
                  ? 'bg-gradient-to-br from-rose-500 to-pink-500 text-white shadow-xl scale-105'
                  : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-xl font-semibold mb-2 ${
                  pkg.popular ? 'text-white' : 'text-gray-900'
                }`}>
                  {pkg.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-4xl font-bold ${
                    pkg.popular ? 'text-white' : 'text-gray-900'
                  }`}>
                    {pkg.price}
                  </span>
                  <span className={pkg.popular ? 'text-rose-100' : 'text-gray-600'}>
                    RON
                  </span>
                </div>
                <p className={`text-sm mt-1 ${
                  pkg.popular ? 'text-rose-100' : 'text-gray-500'
                }`}>
                  {pkg.duration}
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      pkg.popular ? 'text-white' : 'text-rose-500'
                    }`} strokeWidth={2.5} />
                    <span className={`text-sm ${
                      pkg.popular ? 'text-white' : 'text-gray-700'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full py-3 px-4 rounded-lg text-center font-medium transition-all ${
                  pkg.popular
                    ? 'bg-white text-rose-500 hover:bg-rose-50'
                    : 'bg-rose-500 text-white hover:bg-rose-600'
                }`}
              >
                Programează-te
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            * Prețurile pot varia în funcție de complexitatea design-ului
          </p>
        </div>
      </div>
    </section>
  );
}
