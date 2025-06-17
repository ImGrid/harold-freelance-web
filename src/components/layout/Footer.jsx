import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const EmailIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" 
            stroke="#ef4444" 
            strokeWidth="2" 
            fill="none"/>
      <path d="M3 7l9 6 9-6" 
            stroke="#ef4444" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"/>
    </svg>
  );

  const LinkedInIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" 
            stroke="#ef4444" 
            strokeWidth="2" 
            fill="none"/>
      <rect x="2" y="9" width="4" height="12" 
            stroke="#ef4444" 
            strokeWidth="2" 
            fill="none"/>
      <circle cx="4" cy="4" r="2" 
              stroke="#ef4444" 
              strokeWidth="2" 
              fill="none"/>
    </svg>
  );

  const LocationIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" 
            stroke="#ef4444" 
            strokeWidth="2" 
            fill="none"/>
      <circle cx="12" cy="9" r="2.5" 
              fill="#ef4444"/>
    </svg>
  );

  return (
    <footer className="bg-dark-950 text-text-secondary border-t border-dark-800">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-3 group">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <img 
                  src="/favicon.webp" 
                  alt="Harold Ponce Logo" 
                  className="w-full h-full object-cover transition-all duration-300 group-hover:shadow-red-glow"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-8 h-8 bg-accent-red rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-red-glow"><span class="text-white font-bold text-lg">H</span></div>';
                  }}
                />
              </div>
              <span className="text-xl font-heading font-semibold text-text-primary">
                Harold Ponce
              </span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              Desarrollador web especializado en páginas para pequeños negocios en Bolivia.
            </p>
          </div>

          <div>
            <h3 className="text-text-primary font-semibold mb-3">Servicios</h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link to="/servicios" className="hover:text-accent-red transition-colors">
                  Páginas Web
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-accent-red transition-colors">
                  Tiendas Online
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-accent-red transition-colors">
                  Sistemas Completos
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-accent-red transition-colors">
                  Mantenimiento Web
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-text-primary font-semibold mb-3">Enlaces</h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link to="/portfolio" className="hover:text-accent-red transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/precios" className="hover:text-accent-red transition-colors">
                  Precios
                </Link>
              </li>
              <li>
                <Link to="/sobre-mi" className="hover:text-accent-red transition-colors">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-accent-red transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-text-primary font-semibold mb-3">Contacto</h3>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center space-x-3">
                <EmailIcon />
                <a href="mailto:poncehar0331@gmail.com" 
                   className="hover:text-accent-red transition-colors">
                  poncehar0331@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <LinkedInIcon />
                <a href="https://www.linkedin.com/in/harold-ponce-234897285/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="hover:text-accent-red transition-colors">
                  LinkedIn
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <LocationIcon />
                <span>Bolivia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-800 mt-6 pt-6 text-center">
          <p className="text-sm text-text-muted">
            © {currentYear} Harold Ponce. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;