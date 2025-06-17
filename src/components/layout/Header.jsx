import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Precios', href: '/precios' },
    { name: 'Sobre Mí', href: '/sobre-mi' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <header className="bg-background-primary shadow-strong border-b border-dark-700 sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo con imagen */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <img 
                src="/favicon.webp" 
                alt="Harold Ponce Logo" 
                className="w-full h-full object-cover transition-all duration-300 group-hover:shadow-red-glow"
                onError={(e) => {
                  // Fallback si la imagen no carga
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-8 h-8 bg-accent-red rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-red-glow"><span class="text-white font-bold text-lg">H</span></div>';
                }}
              />
            </div>
            <span className="text-xl font-heading font-semibold text-text-primary group-hover:text-accent-red transition-colors">
              Harold Ponce
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-accent-red'
                    : 'text-text-secondary hover:text-accent-red'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contacto"
              className="btn-primary text-sm"
            >
              Solicitar Cotización
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-text-secondary hover:text-accent-red hover:bg-background-secondary focus:outline-none focus:ring-2 focus:ring-accent-red transition-all"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={!isOpen ? 'block' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={isOpen ? 'block' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-dark-700 bg-background-secondary">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-accent-red bg-dark-800'
                      : 'text-text-secondary hover:text-accent-red hover:bg-dark-800'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link
                  to="/contacto"
                  className="btn-primary w-full text-center text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Solicitar Cotización
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;