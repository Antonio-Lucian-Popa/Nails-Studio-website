import { Sparkles, Heart, Star, Flower2 } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Manichiură cu Gel',
    description: 'Unghii perfecte și rezistente, realizate cu produse premium de calitate superioară.',
    features: ['Rezistenţă', 'Finish lucios', 'Design personalizat']
  },
  {
    icon: Heart,
    title: 'Manichiură Semi-Permanent',
    description: 'Culoare intensă și strălucitoare care rezistă până la 3 săptămâni.',
    features: ['Luciu intens, fără zgârieturi', 'Uscare rapidă la lampă', 'Paletă largă de culori']
  },
  {
    icon: Star,
    title: 'Pedichiură Spa',
    description: 'O experiență de relaxare totală: băi aromate, exfoliere delicată și hidratare intensă.',
    features: ['Exfoliere delicată', 'Masaj relaxant', 'Tratament pentru călcâie catifelate / Curățare calus călcâie']
  },
  {
    icon: Flower2,
    title: 'Pedichiură Semi-Permanent',
    description: 'Tratament complet pentru picioare și culoare de lungă durată.',
    features: ['Rezistență îndelungată', 'Culori vibrante, pentru orice sezon', 'Strălucire de durată']
  }
];

export default function Services() {
  return (
    <section id="servicii" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Serviciile Noastre
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferim servicii profesionale de înfrumusețare, cu atenție la detalii și produse de cea mai bună calitate
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100 transition-all duration-300 border border-rose-100 hover:border-rose-200 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                    <service.icon className="w-7 h-7 text-rose-500" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 text-sm">
                        <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
