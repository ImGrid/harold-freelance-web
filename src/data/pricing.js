export const pricingPlans = [
  {
    id: 'basico',
    name: 'Básico',
    subtitle: 'Página web simple',
    price: 2700,
    currency: 'Bs',
    popular: false,
    deliveryTime: '1 mes',
    description: 'Página web de 4 secciones para mostrar tu negocio online.',
    
    includes: [
      'Página web de 4 secciones',
      'Diseño responsive (móvil y desktop)',
      'Formulario de contacto',
      'Información de ubicación y horarios',
      'Galería de fotos básica',
      'Hosting gratis 1 año',
      'Dominio .com incluido',
      '2 rondas de cambios incluidas'
    ],
    
    notIncludes: [
      'Tienda online',
      'Más de 4 secciones',
      'Sistema de reservas',
      'Integración con redes sociales'
    ],
    
    idealFor: [
      'Restaurantes pequeños',
      'Consultorios médicos',
      'Talleres y servicios',
      'Negocios que arrancan'
    ]
  },

  {
    id: 'comercial',
    name: 'Comercial',
    subtitle: 'Página web completa',
    price: 5000,
    currency: 'Bs',
    popular: true,
    deliveryTime: '2 meses',
    description: 'Página web profesional con todas las funcionalidades para tu negocio.',
    
    includes: [
      'Todo lo del plan Básico',
      'Hasta 10 secciones',
      'Galería de fotos avanzada',
      'Integración Google Maps',
      'Formulario de contacto avanzado',
      'Optimización básica SEO',
      'Integración redes sociales',
      'Google Analytics configurado',
      '3 rondas de cambios incluidas'
    ],
    
    notIncludes: [
      'Tienda online',
      'Sistema de pagos',
      'Panel administrativo',
      'Más de 10 secciones'
    ],
    
    idealFor: [
      'Ferreterías',
      'Gimnasios',
      'Clínicas grandes',
      'Restaurantes establecidos'
    ]
  },

  {
    id: 'tienda',
    name: 'Tienda Online',
    subtitle: 'E-commerce básico',
    price: 12500,
    currency: 'Bs',
    popular: false,
    deliveryTime: '3-4 meses',
    description: 'Tienda online completa para vender productos por internet.',
    
    includes: [
      'Todo lo del plan Comercial',
      'Catálogo de hasta 50 productos',
      'Carrito de compras',
      'Sistema de pagos básico',
      'Gestión de inventario',
      'Panel administrativo',
      'Sistema de usuarios',
      'Reportes de ventas básicos',
      'Hosting especializado 1 año',
      '4 rondas de cambios incluidas'
    ],
    
    notIncludes: [
      'Más de 50 productos',
      'Múltiples métodos de pago',
      'Sistema de envíos avanzado',
      'Reportes detallados'
    ],
    
    idealFor: [
      'Tiendas de ropa',
      'Productos artesanales',
      'Distribuidoras pequeñas',
      'Negocios que quieren vender online'
    ]
  },

  {
    id: 'sistema',
    name: 'Sistema Personalizado',
    subtitle: 'Aplicación web completa',
    price: 20000,
    currency: 'Bs',
    priceNote: 'Desde',
    popular: false,
    deliveryTime: 'Dependiendo de la complejidad',
    description: 'Sistema web completo con backend, base de datos y funcionalidades específicas.',
    
    includes: [
      'Análisis de requerimientos',
      'Backend completo con API',
      'Base de datos diseñada',
      'Frontend personalizado',
      'Sistema de usuarios y roles',
      'Panel administrativo avanzado',
      'Reportes personalizados',
      'Integraciones específicas',
      'Hosting especializado 1 año',
      'Documentación técnica',
      'Capacitación de uso',
      'Soporte 3 meses'
    ],
    
    notIncludes: [
      'Mantenimiento continuo',
      'Cambios de requerimientos',
      'Integraciones complejas no acordadas'
    ],
    
    idealFor: [
      'Sistemas de inventario',
      'Plataformas de gestión',
      'Sistemas de facturación',
      'Aplicaciones especializadas'
    ],
    
    note: 'Precio final según requerimientos específicos. Cotización personalizada.'
  }
];

export const maintenancePlans = [
  {
    id: 'basico-mant',
    name: 'Mantenimiento Básico',
    price: 300,
    currency: 'Bs/mes',
    description: 'Mantenimiento esencial para tu página web.',
    
    includes: [
      'Actualización de textos (1 por mes)',
      'Cambio de fotos (2 por mes)',
      'Soporte técnico por WhatsApp',
      'Monitoreo básico'
    ],
    
    responseTime: '48 horas',
    idealFor: 'Páginas web básicas que cambian poco'
  },

  {
    id: 'profesional-mant',
    name: 'Mantenimiento Profesional',
    price: 500,
    currency: 'Bs/mes',
    popular: true,
    description: 'Mantenimiento completo con optimización.',
    
    includes: [
      'Todo lo del plan Básico',
      'Actualizaciones ilimitadas de contenido',
      'Optimización de velocidad mensual',
      'Reporte mensual de estadísticas',
      'Pequeñas mejoras incluidas',
      'Backup diario',
      'Soporte prioritario'
    ],
    
    responseTime: '24 horas',
    idealFor: 'Negocios que actualizan contenido frecuentemente'
  },

];

export const additionalServices = [
  {
    name: 'Página extra',
    price: '200 - 500',
    currency: 'Bs',
    unit: 'por página (dependiendo del modulo)'
  },
  {
    name: 'Productos extra en tienda',
    price: 30,
    currency: 'Bs',
    unit: 'por producto (después de 50)'
  },
  {
    name: 'Formulario personalizado',
    price: 300,
    currency: 'Bs',
    unit: 'por formulario'
  },
  {
    name: 'Migración de sitio existente',
    price: '2000 - 4000',
    currency: 'Bs',
    unit: 'servicio completo (depende del tipo de sitio)'
  },
  {
    name: 'Capacitación normal',
    price: 150,
    currency: 'Bs',
    unit: 'por videos'
  },
  {
    name: 'Capacitación personal',
    price: 100,
    currency: 'Bs',
    unit: 'por sesión (1 hora)'
  }
];

export const pricingInfo = {
  currency: 'Bolivianos (Bs)',
  
  paymentTerms: [
    '50% al confirmar el proyecto',
    '50% al entregar terminado',
    'Pago en efectivo o transferencia bancaria',
  ],
  
  guarantees: [
    'Precio final acordado por escrito',
    'Hosting y dominio incluidos por 1 año',
    'Soporte post-entrega sin costo adicional',
    'Satisfacción garantizada o se hacen los cambios necesarios'
  ],
  
  timeframes: [
    'Los tiempos incluyen hasta 3 rondas de revisiones',
    'Tiempos de entrega desde confirmación de proyecto',
    'Retrasos por cambios de requerimientos no están incluidos',
    'Se pueden acelerar tiempos con costo adicional'
  ],
  
  paymentOptions: [
    'Pago completo: 5% de descuento',
    'Pago en 2 cuotas: 50% inicio + 50% entrega',
    'Pago en 4 cuotas: Dendiendo del plan elegido',
    'Pago en 6 cuotas: Solo proyectos de +12.500bs'
  ]
};

export const getPlanById = (id) => {
  return pricingPlans.find(plan => plan.id === id);
};

export const getPopularPlan = () => {
  return pricingPlans.find(plan => plan.popular);
};

export const formatPrice = (price, currency, note = '') => {
  const formattedPrice = price.toLocaleString();
  return note ? `${note} ${formattedPrice} ${currency}` : `${formattedPrice} ${currency}`;
};