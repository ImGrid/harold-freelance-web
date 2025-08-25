import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Precios", href: "/precios" },
    { name: "Sobre Mí", href: "/sobre-mi" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] border-b bg-background-primary shadow-strong border-dark-700">
      <nav className="container-custom">
        {/* Layout de 3 columnas para desktop: Logo | Links Centrados | CTA */}
        <div className="flex items-center justify-between py-4 md:grid md:grid-cols-3">
          {/* Columna 1: Logo (siempre a la izquierda) */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 overflow-hidden rounded-lg">
                <img
                  src="/favicon.webp"
                  alt="Harold Ponce Logo"
                  className="object-cover w-full h-full transition-all duration-300 group-hover:shadow-red-glow"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML =
                      '<div class="w-8 h-8 bg-accent-red rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-red-glow"><span class="text-white font-bold text-lg">H</span></div>';
                  }}
                />
              </div>
              <span className="text-xl font-semibold transition-colors font-heading text-text-primary group-hover:text-accent-red">
                Harold Ponce
              </span>
            </Link>
          </div>

          {/* Columna 2: Links de navegación (centrados en desktop con mejor espaciado) */}
          <div className="items-center justify-center hidden space-x-8 md:flex lg:space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  location.pathname === item.href
                    ? "text-accent-red"
                    : "text-text-secondary hover:text-accent-red"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Columna 3: CTA Button (siempre a la derecha) */}
          <div className="items-center justify-end hidden md:flex">
            <Link to="/contacto" className="text-sm btn-primary">
              Solicitar Cotización
            </Link>
          </div>

          {/* Botón hamburguesa para móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 transition-all rounded-md text-text-secondary hover:text-accent-red hover:bg-background-secondary focus:outline-none focus:ring-2 focus:ring-accent-red"
            >
              <svg
                className="w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={!isOpen ? "block" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={isOpen ? "block" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isOpen && (
          <div className="border-t md:hidden border-dark-700 bg-background-secondary">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? "text-accent-red bg-dark-800"
                      : "text-text-secondary hover:text-accent-red hover:bg-dark-800"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link
                  to="/contacto"
                  className="w-full text-sm text-center btn-primary"
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
