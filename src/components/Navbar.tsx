import { useState, useEffect } from 'react';

interface NavbarProps {
  siteName: string;
  sections: {
    hero: boolean;
    about: boolean;
    services: boolean;
    plans: boolean;
    tools: boolean;
    contact: boolean;
  };
}

export default function Navbar({ siteName, sections }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#inicio', show: sections.hero },
    { name: 'Nosotros', href: '#nosotros', show: sections.about },
    { name: 'Servicios', href: '#servicios', show: sections.services },
    { name: 'Planes', href: '#planes', show: sections.plans },
    { name: 'Portal Cliente', href: '#herramientas', show: sections.tools },
    { name: 'Contacto', href: '#contacto', show: sections.contact },
  ].filter(item => item.show);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 ${isScrolled ? 'shadow-lg backdrop-blur-md' : ''}`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex items-center space-x-1">
            <div className="w-20 h-20 rounded-lg flex items-center justify-center">
              <img src="/images/only-logo.png" alt="LOGO" />
            </div>
            <span className="text-xl font-bold text-gradient">{siteName}</span>
          </a>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all hover:bg-primary/10 ${isScrolled ? 'text-dark hover:text-primary' : 'text-dark hover:text-primary'
                  }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
          }`}
      >
        <div className="bg-white border-t border-gray-200 py-4">
          <div className="container-custom flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-3 rounded-lg font-medium text-dark hover:bg-primary/10 hover:text-primary transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
