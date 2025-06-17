// Iconos específicos para la página Services
// Iconos complejos y detallados para cada tipo de servicio web

// Icono para Páginas Web para Negocios - Monitor con layout de negocio
export const BusinessWebIcon = () => (
  <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
    {/* Monitor */}
    <rect x="6" y="8" width="52" height="36" rx="3" stroke="#ef4444" strokeWidth="2" fill="none"/>
    <rect x="8" y="10" width="48" height="30" fill="rgba(239, 68, 68, 0.1)"/>
    
    {/* Header de página */}
    <rect x="10" y="12" width="44" height="6" rx="1" fill="#ef4444"/>
    
    {/* Contenido del sitio */}
    <rect x="10" y="20" width="20" height="4" rx="1" fill="rgba(239, 68, 68, 0.6)"/>
    <rect x="10" y="26" width="16" height="2" fill="rgba(239, 68, 68, 0.4)"/>
    <rect x="10" y="30" width="18" height="2" fill="rgba(239, 68, 68, 0.4)"/>
    
    {/* Sidebar */}
    <rect x="34" y="20" width="20" height="18" rx="2" stroke="#ef4444" strokeWidth="1" fill="rgba(239, 68, 68, 0.1)"/>
    
    {/* Base del monitor */}
    <rect x="26" y="44" width="12" height="3" rx="1" fill="#ef4444"/>
    <rect x="22" y="47" width="20" height="2" rx="1" fill="rgba(239, 68, 68, 0.6)"/>
    
    {/* Icono de dinero */}
    <circle cx="50" cy="15" r="3" stroke="#ef4444" strokeWidth="1" fill="rgba(239, 68, 68, 0.2)"/>
    <text x="50" y="17" textAnchor="middle" fontSize="4" fill="#ef4444">$</text>
  </svg>
);

// Icono para Tiendas Online - E-commerce con carrito
export const EcommerceIcon = () => (
  <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
    {/* Pantalla principal */}
    <rect x="8" y="6" width="48" height="32" rx="3" stroke="#ef4444" strokeWidth="2" fill="none"/>
    
    {/* Header de tienda */}
    <rect x="10" y="8" width="44" height="6" rx="1" fill="#ef4444"/>
    
    {/* Productos en grid */}
    <rect x="12" y="16" width="12" height="10" rx="2" stroke="#ef4444" strokeWidth="1" fill="rgba(239, 68, 68, 0.1)"/>
    <rect x="26" y="16" width="12" height="10" rx="2" stroke="#ef4444" strokeWidth="1" fill="rgba(239, 68, 68, 0.1)"/>
    <rect x="40" y="16" width="12" height="10" rx="2" stroke="#ef4444" strokeWidth="1" fill="rgba(239, 68, 68, 0.1)"/>
    
    {/* Precios */}
    <rect x="12" y="28" width="8" height="2" fill="rgba(239, 68, 68, 0.6)"/>
    <rect x="26" y="28" width="8" height="2" fill="rgba(239, 68, 68, 0.6)"/>
    <rect x="40" y="28" width="8" height="2" fill="rgba(239, 68, 68, 0.6)"/>
    
    {/* Carrito de compras */}
    <g transform="translate(45, 42)">
      <circle cx="0" cy="8" r="6" stroke="#ef4444" strokeWidth="2" fill="rgba(239, 68, 68, 0.1)"/>
      <path d="M-3 5 L3 5 L2 8 L-2 8 Z" fill="#ef4444"/>
      <circle cx="-1" cy="11" r="1" fill="#ef4444"/>
      <circle cx="1" cy="11" r="1" fill="#ef4444"/>
      <path d="M-4 3 L-2 3 L-1 5" stroke="#ef4444" strokeWidth="1" fill="none"/>
    </g>
    
    {/* Base */}
    <rect x="24" y="38" width="16" height="2" rx="1" fill="rgba(239, 68, 68, 0.6)"/>
  </svg>
);

// Icono para Sistemas Personalizados - Terminal con código
export const CustomSystemIcon = () => (
  <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
    {/* Pantalla principal con código */}
    <rect x="4" y="4" width="56" height="36" rx="3" stroke="#ef4444" strokeWidth="2" fill="rgba(0, 0, 0, 0.8)"/>
    
    {/* Barra de título */}
    <rect x="6" y="6" width="52" height="4" rx="1" fill="#ef4444"/>
    <circle cx="9" cy="8" r="1" fill="#ffffff"/>
    <circle cx="12" cy="8" r="1" fill="#ffffff"/>
    <circle cx="15" cy="8" r="1" fill="#ffffff"/>
    
    {/* Líneas de código */}
    <rect x="8" y="14" width="4" height="1" fill="rgba(239, 68, 68, 0.8)"/>
    <rect x="14" y="14" width="12" height="1" fill="rgba(239, 68, 68, 0.6)"/>
    <rect x="28" y="14" width="8" height="1" fill="rgba(239, 68, 68, 0.4)"/>
    
    <rect x="12" y="17" width="8" height="1" fill="rgba(239, 68, 68, 0.8)"/>
    <rect x="22" y="17" width="16" height="1" fill="rgba(239, 68, 68, 0.6)"/>
    
    <rect x="8" y="20" width="6" height="1" fill="rgba(239, 68, 68, 0.8)"/>
    <rect x="16" y="20" width="20" height="1" fill="rgba(239, 68, 68, 0.6)"/>
    
    <rect x="16" y="23" width="10" height="1" fill="rgba(239, 68, 68, 0.8)"/>
    <rect x="28" y="23" width="14" height="1" fill="rgba(239, 68, 68, 0.6)"/>
    
    <rect x="8" y="26" width="8" height="1" fill="rgba(239, 68, 68, 0.8)"/>
    <rect x="18" y="26" width="18" height="1" fill="rgba(239, 68, 68, 0.6)"/>
    
    <rect x="12" y="29" width="12" height="1" fill="rgba(239, 68, 68, 0.8)"/>
    <rect x="26" y="29" width="10" height="1" fill="rgba(239, 68, 68, 0.6)"/>
    
    {/* Engranajes del sistema */}
    <g transform="translate(45, 25)">
      <circle cx="0" cy="0" r="5" stroke="#ef4444" strokeWidth="1.5" fill="rgba(239, 68, 68, 0.1)"/>
      <circle cx="0" cy="0" r="2" fill="#ef4444"/>
      <rect x="-1" y="-6" width="2" height="2" fill="#ef4444"/>
      <rect x="-1" y="4" width="2" height="2" fill="#ef4444"/>
      <rect x="-6" y="-1" width="2" height="2" fill="#ef4444"/>
      <rect x="4" y="-1" width="2" height="2" fill="#ef4444"/>
    </g>
    
    {/* Base de datos */}
    <g transform="translate(8, 45)">
      <ellipse cx="8" cy="2" rx="8" ry="2" stroke="#ef4444" strokeWidth="1.5" fill="rgba(239, 68, 68, 0.1)"/>
      <rect x="0" y="2" width="16" height="6" fill="rgba(239, 68, 68, 0.05)"/>
      <ellipse cx="8" cy="8" rx="8" ry="2" stroke="#ef4444" strokeWidth="1.5" fill="rgba(239, 68, 68, 0.1)"/>
      <line x1="0" y1="5" x2="0" y2="8" stroke="#ef4444" strokeWidth="1.5"/>
      <line x1="16" y1="5" x2="16" y2="8" stroke="#ef4444" strokeWidth="1.5"/>
    </g>
  </svg>
);

// Icono para Mantenimiento Web - Herramientas y monitoreo
export const MaintenanceIcon = () => (
  <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
    {/* Monitor con sitio web */}
    <rect x="8" y="8" width="40" height="28" rx="3" stroke="#ef4444" strokeWidth="2" fill="none"/>
    <rect x="10" y="10" width="36" height="22" fill="rgba(239, 68, 68, 0.1)"/>
    
    {/* Contenido del sitio */}
    <rect x="12" y="12" width="32" height="4" rx="1" fill="#ef4444"/>
    <rect x="12" y="18" width="20" height="2" fill="rgba(239, 68, 68, 0.6)"/>
    <rect x="12" y="22" width="16" height="2" fill="rgba(239, 68, 68, 0.4)"/>
    <rect x="12" y="26" width="24" height="2" fill="rgba(239, 68, 68, 0.4)"/>
    
    {/* Base del monitor */}
    <rect x="24" y="36" width="8" height="2" rx="1" fill="#ef4444"/>
    <rect x="20" y="38" width="16" height="2" rx="1" fill="rgba(239, 68, 68, 0.6)"/>
    
    {/* Llave inglesa */}
    <g transform="translate(50, 15) rotate(45)">
      <rect x="-1" y="-8" width="2" height="16" rx="1" fill="#ef4444"/>
      <rect x="-3" y="-8" width="6" height="3" rx="1" fill="#ef4444"/>
      <rect x="-2" y="5" width="4" height="3" rx="1" fill="#ef4444"/>
    </g>
    
    {/* Destornillador */}
    <g transform="translate(55, 25) rotate(-30)">
      <rect x="-0.5" y="-6" width="1" height="12" fill="#ef4444"/>
      <rect x="-1.5" y="-8" width="3" height="2" rx="0.5" fill="rgba(239, 68, 68, 0.8)"/>
    </g>
    
    {/* Indicador de estado */}
    <circle cx="52" cy="12" r="3" stroke="#ef4444" strokeWidth="1.5" fill="rgba(0, 255, 0, 0.2)"/>
    <circle cx="52" cy="12" r="1" fill="#00ff00"/>
    
    {/* Gráfico de rendimiento */}
    <g transform="translate(12, 42)">
      <rect x="0" y="0" width="20" height="12" stroke="#ef4444" strokeWidth="1" fill="rgba(239, 68, 68, 0.05)"/>
      <polyline points="2,10 5,8 8,6 11,4 14,7 17,5 20,3" stroke="#ef4444" strokeWidth="1.5" fill="none"/>
      <circle cx="8" cy="6" r="1" fill="#ef4444"/>
      <circle cx="14" cy="7" r="1" fill="#ef4444"/>
    </g>
    
    {/* Escudo de seguridad */}
    <g transform="translate(38, 45)">
      <path d="M0 0 L4 -2 L8 0 L8 6 L4 10 L0 6 Z" stroke="#ef4444" strokeWidth="1.5" fill="rgba(239, 68, 68, 0.1)"/>
      <path d="M2 3 L3.5 5 L6 2" stroke="#ef4444" strokeWidth="1" fill="none"/>
    </g>
  </svg>
);