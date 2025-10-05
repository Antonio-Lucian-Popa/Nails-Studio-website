import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="acasa" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Manichiură profesională"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/70 via-pink-900/60 to-rose-800/70" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="flex justify-center mb-6">
          <Sparkles className="w-16 h-16 text-rose-400" strokeWidth={1.5} />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
          Frumusețe & Eleganță
        </h1>

        <p className="text-xl md:text-2xl text-rose-50 mb-8 max-w-2xl mx-auto font-light">
          Servicii profesionale de manichiură și pedichiură cu gel
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
          >
            Programează-te
          </a>
          <a
            href="#servicii"
            className="px-8 py-4 bg-white text-gray-800 rounded-full hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg font-medium border border-gray-200"
          >
            Vezi Servicii
          </a>
        </div>

        <div className="mt-16 text-rose-100 text-sm">
          <p>📍 Adjud, Vrancea</p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
