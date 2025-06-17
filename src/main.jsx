import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

document.title = 'Harold Ponce - Desarrollador Web Freelance en Bolivia';

const metaDescription = document.querySelector('meta[name="description"]');
if (metaDescription) {
  metaDescription.setAttribute(
    'content', 
    'Páginas web profesionales para pequeños negocios en Bolivia'
  );
} else {
  const meta = document.createElement('meta');
  meta.name = 'description';
  meta.content = 'Páginas web profesionales para pequeños negocios en Bolivia';
  document.head.appendChild(meta);
}

window.addEventListener('error', (event) => {
  console.error('Error global capturado:', event.error);
  
  if (import.meta.env.DEV) {
    console.error('Detalles del error:', {
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      error: event.error,
      timestamp: new Date().toISOString(),
      url: window.location.href
    });
  }
  
  if (import.meta.env.PROD) {

  }
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Promesa rechazada no manejada:', event.reason);
  
  if (import.meta.env.DEV) {
    console.error('Promise rejection details:', event);
  }
  
  if (import.meta.env.PROD) {
  }
});

const initializeApp = () => {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    throw new Error('No se encontró el elemento root en el DOM');
  }

  const root = createRoot(rootElement);
  
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

try {
  initializeApp();
} catch (error) {
  console.error('Error fatal al inicializar la aplicación:', error);
  
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background-color: #f9fafb;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        text-align: center;
        padding: 2rem;
        color: #374151;
      ">
        <div style="font-size: 4rem; margin-bottom: 1rem;">💻⚠️</div>
        
        <h1 style="
          color: #dc2626; 
          margin-bottom: 0.5rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        ">
          Error al cargar la página web
        </h1>
        
        <p style="
          color: #6b7280; 
          margin-bottom: 2rem;
          max-width: 500px;
          line-height: 1.5;
        ">
          No se pudo inicializar la página web de Harold Ponce. 
          Por favor, recarga la página o contacta directamente.
        </p>
        
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;">
          <button 
            onclick="window.location.reload()" 
            style="
              background-color: #dc2626;
              color: white;
              border: none;
              padding: 0.75rem 1.5rem;
              border-radius: 0.5rem;
              cursor: pointer;
              font-size: 1rem;
              font-weight: 600;
              transition: all 0.2s;
            "
            onmouseover="this.style.backgroundColor='#b91c1c'"
            onmouseout="this.style.backgroundColor='#dc2626'"
          >
            🔄 Recargar página
          </button>
          
          <a 
            href="mailto:poncehar0331@gmail.com"
            style="
              background-color: #374151;
              color: white;
              border: none;
              padding: 0.75rem 1.5rem;
              border-radius: 0.5rem;
              text-decoration: none;
              font-size: 1rem;
              font-weight: 600;
              display: inline-block;
              transition: all 0.2s;
            "
            onmouseover="this.style.backgroundColor='#1f2937'"
            onmouseout="this.style.backgroundColor='#374151'"
          >
            📧 Contactar Harold
          </a>
        </div>
        
        <div style="
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid #e5e7eb;
          text-align: center;
        ">
          <p style="font-size: 0.875rem; color: #9ca3af;">
            Harold Ponce - Desarrollador Web Freelance<br>
            📧 poncehar0331@gmail.com<br>
            📍 Bolivia
          </p>
        </div>
      </div>
    `;
  }
  
  if (import.meta.env.PROD) {

  }
}

if (import.meta.env.PROD) {

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
}
