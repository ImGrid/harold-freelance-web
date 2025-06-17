import { 
  BusinessWebIcon, 
  EcommerceIcon, 
  CustomSystemIcon, 
  MaintenanceIcon 
} from '../components/icons';

import { 
  PageLayout, 
  HeroSection 
} from '../components/sections';

import { services, servicesConfig, formatPrice } from '../data/services';
import { Button, Card, Badge, Section } from '../components/ui';

const Services = () => {
  const serviceIcons = {
    'business-web': <BusinessWebIcon />,
    'ecommerce': <EcommerceIcon />,
    'custom-system': <CustomSystemIcon />,
    'maintenance': <MaintenanceIcon />
  };

  return (
    <PageLayout>
      <HeroSection 
        title="Servicios de Desarrollo Web"
        description={`Desde páginas web básicas hasta sistemas completos. Desarrollo soluciones 
          web profesionales para pequeños negocios en Bolivia.`}
        primaryCTA={{ 
          text: "Ver Precios", 
          to: "/precios"
        }}
        secondaryCTA={{ 
          text: "Solicitar Cotización", 
          to: "/contacto",
          variant: "secondary"
        }}
      />

      <Section background="secondary">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            let iconKey = 'business-web'; // default
            if (service.title.toLowerCase().includes('tienda') || service.title.toLowerCase().includes('online')) {
              iconKey = 'ecommerce';
            } else if (service.title.toLowerCase().includes('sistema') || service.title.toLowerCase().includes('personalizado')) {
              iconKey = 'custom-system';
            } else if (service.title.toLowerCase().includes('mantenimiento')) {
              iconKey = 'maintenance';
            }

            return (
              <Card 
                key={service.id} 
                variant={service.featured ? 'featured' : 'secondary'}
                hover={true}
                className="relative"
              >
                {service.featured && (
                  <div className="absolute -top-3 left-6">
                    <Badge variant="primary">⭐ Especialidad</Badge>
                  </div>
                )}
                
                <div className="flex items-start space-x-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center border-2 border-gray-200 shadow-sm">
                      {serviceIcons[iconKey]}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-text-primary mb-2">
                      {service.title}
                    </h3>
                    <p 
                      className="font-medium mb-3"
                      style={{
                        color: '#f43c3c',
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                      }}
                    >
                      {service.subtitle}
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <div 
                    className="text-2xl font-bold"
                    style={{
                      color: '#f43c3c',
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                    }}
                  >
                    {formatPrice(service.price)}
                  </div>
                  {service.price.note && (
                    <p className="text-sm text-text-muted mt-1">{service.price.note}</p>
                  )}
                  <p className="text-sm text-text-secondary mt-1">
                    Tiempo de entrega: {service.deliveryTime}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-text-primary mb-3">Incluye:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 5).map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-text-secondary">
                        <span 
                          className="mt-0.5"
                          style={{ color: '#f01c1c' }}
                        >
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 5 && (
                      <li className="text-sm text-text-muted italic">
                        + {service.features.length - 5} características más...
                      </li>
                    )}
                  </ul>
                </div>

                <div className="pt-4 border-t border-dark-600">
                  <Button to="/contacto" className="w-full text-center">
                    Solicitar Cotización
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section background="secondary">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
            ¿Cómo trabajamos?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Proceso simple y transparente para tu proyecto
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {servicesConfig.workflowSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div 
                  className="flex-shrink-0 w-10 h-10 text-white rounded-full flex items-center justify-center font-bold"
                  style={{
                    backgroundColor: '#ef4444'
                  }}
                >
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Services;