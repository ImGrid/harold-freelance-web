import { 
  SearchIcon, 
  MobileIcon, 
  BusinessIcon, 
  PhoneIcon, 
  TrendingIcon, 
  ReachIcon 
} from '../components/icons';

import { 
  PageLayout, 
  HeroSection, 
  FeatureGrid, 
  CallToAction 
} from '../components/sections';

const Home = () => {
  const webBenefits = [
    {
      id: 'google-search',
      icon: <SearchIcon />,
      title: "Te encuentran en Google",
      description: `Más del 70% de personas buscan "restaurantes cerca de mí" o "productos de ferreterías" 
        antes de salir de casa. ¿Aparece tu negocio?`
    },
    {
      id: 'always-available',
      icon: <MobileIcon />,
      title: "Información siempre disponible",
      description: `Tus horarios, ubicación, servicios y precios disponibles 24/7. 
        Los clientes pueden verificar antes de visitarte.`
    },
    {
      id: 'compete-big',
      icon: <BusinessIcon />,
      title: "Competir con grandes empresas",
      description: `Una página web profesional hace que tu pequeño negocio se vea tan confiable 
        como las grandes cadenas.`
    },
    {
      id: 'less-calls',
      icon: <PhoneIcon />,
      title: "Menos llamadas repetitivas",
      description: `Reduce llamadas preguntando horarios, precios o ubicación. 
        Toda la información está en tu página web.`
    },
    {
      id: 'more-sales',
      icon: <TrendingIcon />,
      title: "Más ventas",
      description: `Clientes que ven tu página web antes de visitarte tienen más probabilidad 
        de comprar porque ya conocen tus productos.`
    },
    {
      id: 'wider-reach',
      icon: <ReachIcon />,
      title: "Alcance más amplio",
      description: `Llega a clientes de toda tu ciudad, no solo los que pasan por tu local. 
        Expande tu zona de influencia.`
    }
  ];

  const ctaFeatures = [
    { icon: "⚡", text: "Respuesta rápida garantizada" },
    { icon: "💰", text: "Precios adaptados a Bolivia" },
    { icon: "🤝", text: "Sin compromiso" }
  ];

  return (
    <PageLayout>
      <HeroSection 
        title="Páginas Web y Sistemas Completos para tu Negocio"
        titleSize="large"
        titleHighlight={{
          text: "Sistemas Completos",
          color: '#dc2626',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)'
        }}
        description={`Desarrollo páginas web, tiendas online y sistemas personalizados para pequeños negocios en Bolivia. 
          Desde una página básica hasta sistemas completos con base de datos.`}
        primaryCTA={{ 
          text: "Ver Precios", 
          to: "/precios",
          size: "large"
        }}
        secondaryCTA={{ 
          text: "Ver Ejemplos", 
          to: "/portfolio",
          variant: "secondary",
          size: "large"
        }}
        background="transparent"
        className="bg-gradient-to-br from-background-primary via-background-secondary to-background-primary"
      />

      <FeatureGrid 
        title="¿Por qué tu negocio necesita una página web?"
        subtitle={`En Bolivia, cada vez más clientes buscan negocios en internet antes de visitarlos. 
          Una página web profesional te ayuda a competir y crecer.`}
        features={webBenefits}
        background="transparent"
        className="bg-dark-800"
        columns={3}
        showIconBackground={true}
        iconBackgroundClass="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gray-200"
        cardHover={true}
      />

      <CallToAction 
        title="¿Tu negocio necesita una página web?"
        description={`Te ayudo a tener presencia online profesional. Conversemos sobre tu proyecto 
          y te doy una cotización sin compromiso`}
        primaryCTA={{ 
          text: "Solicitar Cotización Gratis", 
          to: "/contacto",
          className: "bg-white text-accent-red hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors shadow-md"
        }}
        secondaryCTA={{ 
          text: "Ver Precios", 
          to: "/precios",
          className: "border-2 border-white text-white hover:bg-white hover:text-accent-red font-semibold px-8 py-4 rounded-lg transition-all"
        }}
        features={ctaFeatures}
        variant="gradient"
        background="transparent"
        className="bg-dark-800"
      />
    </PageLayout>
  );
};

export default Home;