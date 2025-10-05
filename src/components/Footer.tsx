import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 mb-2">
            <span className='flex items-center justify-center text-gray-400'>
              Realizat cu <Heart className="ml-1 mr-1 w-4 h-4 text-rose-400 fill-rose-400" /> de</span> <a href="https://vision-software.netlify.app" target="_blank" rel="noopener noreferrer">
              Vision Software
            </a>

          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Urban Gloss. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}
