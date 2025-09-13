export const services = [
  {
    id: "paginas-web",
    title: "Páginas Web para Negocios",
    subtitle: "Presencia online profesional",
    description:
      "Páginas web profesionales para restaurantes, ferreterías, clínicas, gimnasios y más. Diseñadas para que tus clientes te encuentren fácilmente y confíen en tu negocio.",
    longDescription:
      "Desarrollo páginas web completas y funcionales que ayudan a pequeños negocios a tener presencia online profesional. Cada página está optimizada para que aparezca en Google y se vea perfecta en todos los dispositivos.",
    price: {
      from: 1000,
      to: 2400,
      currency: "Bs",
      note: "Según complejidad",
    },
    features: [
      "Diseño profesional y moderno",
      "Optimizado para móviles y tablets",
      "Formulario de contacto funcional",
      "Galería de fotos optimizada",
      "Información de ubicación y horarios",
      "Optimización básica para Google (SEO)",
      "Hosting gratuito por 1 año",
      "Dominio .com incluido",
      "Hasta 3 revisiones incluidas",
    ],
    deliveryTime: "1 mes",
    idealFor: [
      "Restaurantes y heladerías",
      "Ferreterías y talleres",
      "Clínicas y consultorios",
      "Gimnasios independientes",
      "Peluquerías y salones",
      "Tiendas de barrio",
    ],
    icon: "🌐",
  },

  {
    id: "tiendas-online",
    title: "Tiendas Online",
    subtitle: "Vende 24 horas al día",
    description:
      "Sistema completo de e-commerce para vender productos online. Incluye carrito de compras, gestión de productos, sistema de pagos y panel administrativo.",
    longDescription:
      "Desarrollo tiendas online completas que permiten a los negocios vender sus productos por internet. Sistema fácil de usar tanto para clientes como para administradores, con todas las funcionalidades necesarias para un e-commerce exitoso.",
    price: {
      from: 9000,
      to: 15000,
      currency: "Bs",
      note: "Según productos y funcionalidades",
    },
    features: [
      "Catálogo de productos ilimitados",
      "Carrito de compras intuitivo",
      "Sistema de pagos integrado",
      "Gestión de inventario automática",
      "Panel de administración completo",
      "Reportes de ventas",
      "Sistema de usuarios y cuentas",
      "Búsqueda y filtros avanzados",
      "Optimización para móviles",
      "Integración con redes sociales",
      "Hosting especializado incluido 1 año",
    ],
    technologies: [
      "React",
      "Node.js",
      "Base de datos",
      "API de pagos",
      "Admin Dashboard",
    ],
    deliveryTime: "3 - 4 meses",
    idealFor: [
      "Tiendas de ropa y accesorios",
      "Venta de productos artesanales",
      "Distribuidoras locales",
      "Tiendas de tecnología",
      "Productos de belleza",
      "Cualquier negocio que venda productos físicos",
    ],
  },

  {
    id: "sistemas-completos",
    title: "Sistemas Web Personalizados",
    subtitle: "Aplicaciones web a medida",
    description:
      "Desarrollo de sistemas web completos con backend, frontend y base de datos. Ideal para gestión interna, sistemas de inventario, plataformas especializadas y aplicaciones complejas.",
    longDescription:
      "Creo aplicaciones web completas desde cero, con todas las funcionalidades que tu negocio necesita. Sistemas robustos que incluyen autenticación de usuarios, bases de datos, APIs y paneles administrativos avanzados.",
    price: {
      from: 15000,
      to: 20000,
      currency: "Bs",
      note: "Cotización personalizada según requerimientos",
    },
    features: [
      "Backend completo con API",
      "Base de datos diseñada específicamente",
      "Frontend moderno y responsive",
      "Sistema de usuarios y roles",
      "Autenticación y seguridad",
      "Panel administrativo avanzado",
      "Reportes y analytics",
      "Integraciones con terceros",
      "Backup automático",
      "Documentación técnica",
      "Capacitación para uso del sistema",
      "Soporte técnico 3 meses",
    ],
    deliveryTime: "Dependiendo de la complejidad",
    idealFor: [
      "Sistemas de gestión empresarial",
      "Plataformas de inventario",
      "Sistemas de citas y reservas",
      "Plataformas educativas",
      "Sistemas de facturación",
      "Aplicaciones especializadas para industrias específicas",
    ],
  },

  {
    id: "mantenimiento",
    title: "Mantenimiento Web",
    subtitle: "Tu página siempre actualizada",
    description:
      "Servicio mensual de mantenimiento para tu página web. Actualizaciones de contenido, copias de seguridad, soporte técnico y optimización continua.",
    longDescription:
      "Mantengo tu página web funcionando perfectamente con actualizaciones regulares, soporte técnico y mejoras continuas. Tu página siempre estará segura, rápida y actualizada.",
    price: {
      from: 300,
      to: 500,
      currency: "Bs/mes",
      note: "Según plan elegido",
    },
    features: [
      "Actualizaciones de contenido (textos, fotos)",
      "Copias de seguridad semanales",
      "Soporte técnico vía WhatsApp",
      "Optimización de velocidad",
      "Monitoreo de seguridad",
      "Reportes mensuales de rendimiento",
      "Pequeños cambios y mejoras",
      "Actualización de información",
      "Respaldo en la nube",
    ],
    technologies: [
      "Hosting Management",
      "Security Updates",
      "Performance Optimization",
    ],
    deliveryTime: "Servicio continuo",
    idealFor: [
      "Negocios con páginas web existentes",
      "Clientes que necesitan actualizaciones frecuentes",
      "Empresas que no tienen personal técnico",
      "Sitios web de alta rotación de contenido",
    ],
    examples: [
      {
        type: "Mantenimiento Básico",
        description: "Actualizaciones mensuales y soporte técnico",
      },
      {
        type: "Mantenimiento Premium",
        description:
          "Actualizaciones semanales, optimización y reportes detallados",
      },
    ],
    icon: "🔧",
    recurring: true,
  },
];

export const servicesConfig = {
  paymentMethods: [
    "Pago con transferencia bancaria",
    "Pago en efectivo (La Paz)",
    "Pago por etapas (50% inicio, 50% entrega)",
    "Planes de pago disponibles para proyectos grandes",
  ],

  generalIncludes: [
    "Hosting gratuito por 1 año",
    "Dominio .com incluido",
    "Diseño responsive (móvil y desktop)",
    "Optimización básica SEO",
    "Soporte técnico post-entrega",
    "Manual de uso básico",
  ],

  workflowSteps: [
    {
      step: 1,
      title: "Consulta inicial",
      description: "Conversamos sobre tu proyecto y necesidades específicas",
    },
    {
      step: 2,
      title: "Propuesta y cotización",
      description: "Te envío propuesta detallada con precios y tiempos",
    },
    {
      step: 3,
      title: "Desarrollo",
      description: "Creo tu página/sistema con actualizaciones regulares",
    },
    {
      step: 4,
      title: "Revisiones",
      description: "Hacemos ajustes según tus comentarios",
    },
    {
      step: 5,
      title: "Entrega y capacitación",
      description: "Entrego el proyecto final y te enseño a usarlo",
    },
  ],

  whyChooseMe: [
    {
      icon: "💬",
      title: "Comunicación clara",
      description: "Te mantengo informado en cada etapa del proyecto",
    },
    {
      icon: "⏰",
      title: "Cumplimiento de plazos",
      description: "Entrego en las fechas acordadas, sin excusas",
    },
    {
      icon: "💰",
      title: "Precios justos",
      description: "Tarifas competitivas adaptadas al mercado boliviano",
    },
    {
      icon: "🛠️",
      title: "Código de calidad",
      description: "Uso tecnologías modernas para páginas rápidas y seguras",
    },
    {
      icon: "🇧🇴",
      title: "Enfoque local",
      description: "Entiendo las necesidades de los negocios bolivianos",
    },
    {
      icon: "📞",
      title: "Soporte post-entrega",
      description: "Te ayudo con dudas después de entregar tu proyecto",
    },
  ],
};
export const formatPrice = (price) => {
  if (price.to) {
    return `${price.from.toLocaleString()} - ${price.to.toLocaleString()} ${price.currency}`;
  }
  return `Desde ${price.from.toLocaleString()} ${price.currency}`;
};
