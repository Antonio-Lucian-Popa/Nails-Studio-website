import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-gray-400 mb-2">
            Realizat cu <Heart className="w-4 h-4 text-rose-400 fill-rose-400" /> în Adjud, Vrancea
          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Nails Studio. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}
