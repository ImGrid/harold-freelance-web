import React, { useCallback, useMemo, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';

const PAGE_CONFIGS = {
  '/': {
    title: 'Harold Ponce - Desarrollador Web Freelance en Bolivia',
    description: 'Páginas web profesionales para pequeños negocios en Bolivia.'
  },
  '/servicios': {
    title: 'Servicios de Desarrollo Web | Harold Ponce',
    description: 'Páginas web, tiendas online y sistemas personalizados'
  },
  '/portfolio': {
    title: 'Portfolio de Proyectos Web | Harold Ponce',
    description: 'Ejemplos de páginas web desarrolladas.'
  },
  '/precios': {
    title: 'Precios de Páginas Web | Harold Ponce',
    description: 'Precios que se adaptan a ti.'
  },
  '/sobre-mi': {
    title: 'Sobre Mí | Harold Ponce - Desarrollador Web',
    description: 'Desarrollador web freelance.'
  },
  '/contacto': {
    title: 'Contacto | Harold Ponce - Solicitar Cotización',
    description: 'Solicita tu cotización gratuita'
  }
};

function useBasicSEO(pathname) {
  useLayoutEffect(() => {
    const config = PAGE_CONFIGS[pathname] || PAGE_CONFIGS['/'];
    
    document.title = config.title;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', config.description);
    
    const updateOGMeta = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    updateOGMeta('og:title', config.title);
    updateOGMeta('og:description', config.description);
    updateOGMeta('og:url', window.location.href);
    updateOGMeta('og:type', 'website');
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;
    
  }, [pathname]);
}

const NotFoundPage = React.memo(function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoHome = useCallback(() => {
    navigate('/', { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-[50vh] flex items-center justify-center p-4">
      <div className="text-center max-w-md mx-auto">
        <div className="text-6xl font-bold text-accent-red mb-4">404</div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Página no encontrada
        </h1>
        <p className="text-text-secondary mb-6">
          La página que buscas no existe. Explora mis servicios de desarrollo web.
        </p>
        <div className="space-y-3">
          <button 
            onClick={handleGoHome}
            className="w-full bg-accent-red text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-600 transition-colors"
          >
            Ir al Inicio
          </button>
          <div className="text-sm text-text-muted">
            O visita:{' '}
            <button 
              onClick={() => navigate('/servicios')}
              className="text-accent-red hover:underline"
            >
              Servicios
            </button>
            {' • '}
            <button 
              onClick={() => navigate('/precios')}
              className="text-accent-red hover:underline"
            >
              Precios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

const AppContent = React.memo(function AppContent() {
  const location = useLocation();

  useBasicSEO(location.pathname);

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/precios" element={<Pricing />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          
          <Route path="/services" element={<Navigate to="/servicios" replace />} />
          <Route path="/pricing" element={<Navigate to="/precios" replace />} />
          <Route path="/contact" element={<Navigate to="/contacto" replace />} />
          <Route path="/about" element={<Navigate to="/sobre-mi" replace />} />
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
});

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Freelance Website Error:', error, errorInfo);
    
    if (process.env.NODE_ENV === 'production') {
    }
  }

  handleReload = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background-primary p-4">
          <div className="text-center max-w-lg">
            <div className="text-6xl mb-6">💥</div>
            <h1 className="text-3xl font-bold text-text-primary mb-3">
              Error en la Página Web
            </h1>
            <p className="text-text-secondary mb-6">
              Algo salió mal. Por favor, recarga la página o contacta a Harold.
            </p>
            
            <div className="space-y-3">
              <button
                onClick={this.handleReload}
                className="bg-accent-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
              >
                Recargar Página
              </button>
              
              <div className="text-sm">
                <a 
                  href="mailto:poncehar0331@gmail.com" 
                  className="text-accent-red hover:underline"
                >
                  Contactar a Harold: poncehar0331@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const App = React.memo(function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
});

// App envuelto con Error Boundary
const SafeApp = React.memo(function SafeApp() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
});

export default SafeApp;