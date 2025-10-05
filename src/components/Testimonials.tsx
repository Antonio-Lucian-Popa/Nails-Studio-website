import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana-Maria',
    text: 'Cel mai bun salon din Adjud! Unghiile mele arată impecabil și rezistă săptămâni întregi. Recomand cu încredere!',
    rating: 5
  },
  {
    name: 'Elena',
    text: 'Profesionalism la cele mai înalte standarde. Atmosferă plăcută și rezultate care depășesc așteptările.',
    rating: 5
  },
  {
    name: 'Cristina',
    text: 'Am încercat multe saloane, dar aici am găsit cea mai bună calitate. Manichiura durează mult și arată natural.',
    rating: 5
  },
  {
    name: 'Mihaela',
    text: 'Atenție la detalii și produse de calitate superioară. Mă simt răsfățată de fiecare dată când vin.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ce Spun Clientele Noastre
          </h2>
          <p className="text-lg text-gray-600">
            Satisfacția ta este cea mai mare recompensă
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-gray-900">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
