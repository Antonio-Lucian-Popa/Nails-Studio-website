import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact & Locație
          </h2>
          <p className="text-lg text-gray-600">
            Programează-te pentru o experiență de neuitat
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-rose-500" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Adresă</h3>
                <p className="text-gray-600">Strada Libertății, Adjud, Județul Vrancea</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-rose-500" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Telefon</h3>
                <a href="tel:+40772225528" className="text-gray-600 hover:text-rose-500 transition-colors">
                  +40 772 225 528
                </a>
              </div>
            </div>


            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-rose-500" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Program</h3>
                <div className="text-gray-600 space-y-1">
                  <p>Luni - Vineri: 09:00 - 19:00</p>
                  <p>Sâmbătă: 10:00 - 18:00</p>
                  <p>Duminică: Închis</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2766.786633728638!2d27.1804827761781!3d46.095230271091324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b5b5c16db039c9%3A0xc0f2c0dcad2b3868!2sStrada%20Libert%C4%83%C5%A3ii%2C%20625100%20Adjud!5e0!3m2!1sro!2sro!4v1759671971509!5m2!1sro!2sro"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locație Adjud, Vrancea"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
