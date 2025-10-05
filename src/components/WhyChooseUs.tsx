import { Shield, Sparkles, Clock, Heart, Award, Smile } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Produse Premium',
    description: 'Folosim doar produse profesionale de cea mai înaltă calitate pentru rezultate perfecte'
  },
  {
    icon: Sparkles,
    title: 'Tehnici Moderne',
    description: 'Suntem mereu la curent cu ultimele tendințe și tehnici din industrie'
  },
  {
    icon: Clock,
    title: 'Durabilitate',
    description: 'Manichiura și pedichiura noastră rezistă săptămâni întregi fără probleme'
  },
  {
    icon: Heart,
    title: 'Îngrijire Personalizată',
    description: 'Fiecare client primește atenție individuală și servicii adaptate nevoilor sale'
  },
  {
    icon: Award,
    title: 'Experiență Dovedită',
    description: 'Ani de experiență în domeniul nail art și îngrijirea unghiilor'
  },
  {
    icon: Smile,
    title: 'Atmosferă Relaxantă',
    description: 'Mediu plăcut și confortabil unde te poți relaxa complet'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            De Ce Să Ne Alegi?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descoperă beneficiile de a lucra cu profesioniști dedicați care pun pe primul loc calitatea și satisfacția ta
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-rose-50 hover:to-pink-50 border border-gray-200 hover:border-rose-200 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 group-hover:from-rose-200 group-hover:to-pink-200 flex items-center justify-center mb-4 transition-colors">
                  <reason.icon className="w-8 h-8 text-rose-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
