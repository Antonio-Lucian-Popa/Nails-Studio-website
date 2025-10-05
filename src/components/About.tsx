import { Award, Clock, Heart } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Experiență',
    description: 'Ani de experiență în domeniul nail art și îngrijirea unghiilor'
  },
  {
    icon: Heart,
    title: 'Pasiune',
    description: 'Dedicare și atenție la detalii pentru fiecare client'
  },
  {
    icon: Clock,
    title: 'Flexibilitate',
    description: 'Program flexibil adaptat nevoilor tale'
  }
];

export default function About() {
  return (
    <section id="despre" className="py-24 bg-gradient-to-br from-gray-50 to-rose-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Despre Noi
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Suntem pasionați de frumusețe și dedicați să oferim servicii de calitate superioară în domeniul manichiurii și pedichiurii.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Folosim doar produse profesionale premium și tehnici moderne pentru a-ți oferi rezultate impecabile și de lungă durată. Fiecare client este special pentru noi, iar satisfacția ta este prioritatea noastră.
            </p>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-rose-500" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
