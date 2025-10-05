import { Phone, Calendar } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-rose-500 via-pink-500 to-rose-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Pregătită Pentru Unghii Perfecte?
        </h2>
        <p className="text-xl text-rose-50 mb-8 max-w-2xl mx-auto">
          Rezervă acum o programare și oferă-ți momentul de răsfăț pe care îl meriți. Primele 10 clienți noi beneficiază de 15% reducere!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+40"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rose-600 rounded-full hover:bg-rose-50 transition-all duration-300 shadow-xl hover:shadow-2xl font-semibold"
          >
            <Phone className="w-5 h-5" />
            Sună Acum
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-white rounded-full hover:bg-white hover:text-rose-600 transition-all duration-300 font-semibold"
          >
            <Calendar className="w-5 h-5" />
            Programează-te Online
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white">
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">500+</div>
            <div className="text-rose-100">Clienti Multumiti</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">5+</div>
            <div className="text-rose-100">Ani Experiență</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">100%</div>
            <div className="text-rose-100">Satisfacție</div>
          </div>
        </div>
      </div>
    </section>
  );
}
