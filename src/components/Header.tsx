import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // când meniul mobil e deschis, forțează stilul „solid”
  const isSolid = isScrolled || isMobileMenuOpen;

  const navItems = [
    { label: 'Acasă', href: '#acasa' },
    { label: 'Servicii', href: '#servicii' },
    { label: 'Prețuri', href: '#preturi' },
    { label: 'Galerie', href: '#galerie' },
    { label: 'Despre', href: '#despre' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#acasa" className="flex items-center gap-2 group">
            <Sparkles
              className={`w-8 h-8 transition-colors ${
                isSolid ? 'text-rose-500' : 'text-white'
              }`}
              strokeWidth={1.5}
            />
            <span
              className={`text-xl font-semibold transition-colors ${
                isSolid ? 'text-gray-900' : 'text-white'
              }`}
            >
              Nails Studio
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isSolid
                    ? 'text-gray-700 hover:text-rose-500'
                    : 'text-white hover:text-rose-200'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Toggle mobil */}
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isSolid ? 'hover:bg-gray-100' : 'hover:bg-white/10'
            }`}
            aria-label="Deschide/închide meniul"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isSolid ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isSolid ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Meniu mobil */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden py-4 border-t border-gray-200 bg-white shadow-sm rounded-b-2xl"
          >
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-1 py-3 text-base font-medium text-gray-800 hover:text-rose-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
