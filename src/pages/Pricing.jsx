import { 
  PaymentIcon, 
  GuaranteeIcon, 
  TimeIcon, 
  PaymentOptionsIcon 
} from '../components/icons';

import { 
  PageLayout, 
  HeroSection, 
  InfoCards 
} from '../components/sections';

import { pricingPlans, maintenancePlans, additionalServices, pricingInfo, formatPrice } from '../data/pricing';
import { Button, Card, Badge, Section } from '../components/ui';

const Pricing = () => {
  const importantInfo = [
    {
      id: 'payment-methods',
      icon: <PaymentIcon />,
      title: "Formas de Pago",
      items: pricingInfo.paymentTerms
    },
    {
      id: 'guarantees',
      icon: <GuaranteeIcon />,
      title: "Garantías", 
      items: pricingInfo.guarantees
    },
    {
      id: 'timeframes',
      icon: <TimeIcon />,
      title: "Tiempos de Entrega",
      items: pricingInfo.timeframes
    },
    {
      id: 'payment-options',
      icon: <PaymentOptionsIcon />,
      title: "Pagos por Cuotas",
      items: pricingInfo.paymentOptions
    }
  ];

  return (
    <PageLayout>
      <HeroSection 
        title="Precios"
        description="Precios que se adapten a ti. Hosting y dominio incluidos por 1 año."
        maxWidth="max-w-3xl"
      />

      <Section background="secondary">
        <div className="text-center mb-8 md:mb-12">
          <h2 
            className="text-2xl md:text-3xl font-heading font-bold mb-4"
            style={{
              color: '#f43c3c',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
            }}
          >
            Páginas Web y Sistemas
          </h2>
          <p className="text-base md:text-lg text-text-secondary">
            Elige el plan que mejor se adapte a tu negocio
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="block lg:hidden">
            <div className="space-y-6 px-2">
              {pricingPlans.map((plan) => (
                <div 
                  key={plan.id}
                  className={`relative ${plan.popular ? 'px-4' : ''}`}
                >
                  <Card 
                    variant={plan.popular ? 'featured' : 'secondary'}
                    hover={true}
                    className="relative h-full flex flex-col"
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                        <Badge variant="primary">Más Popular</Badge>
                      </div>
                    )}
                    
                    <div className="text-center mb-4 pt-2">
                      <h3 className="text-lg font-semibold text-text-primary mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-text-secondary text-sm mb-3">
                        {plan.subtitle}
                      </p>
                      
                      <div className="mb-3">
                        <div className="flex items-baseline justify-center">
                          {plan.priceNote && (
                            <span className="text-xs text-text-muted mr-1">{plan.priceNote}</span>
                          )}
                          <span 
                            className="text-2xl md:text-3xl font-bold"
                            style={{
                              color: '#ef4444',
                              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                            }}
                          >
                            {plan.price.toLocaleString()}
                          </span>
                          <span className="text-text-secondary ml-1">{plan.currency}</span>
                        </div>
                        <p className="text-xs text-text-muted mt-1">
                          Entrega: {plan.deliveryTime}
                        </p>
                      </div>
                      
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {plan.description}
                      </p>
                    </div>

                    {/* Contenido flexible */}
                    <div className="flex-grow px-2">
                      {/* Incluye */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-text-primary mb-2 text-sm">Incluye:</h4>
                        <ul className="space-y-1">
                          {plan.includes.map((item, index) => (
                            <li key={index} className="flex items-start space-x-2 text-xs text-text-secondary">
                              <span 
                                className="mt-0.5 text-xs flex-shrink-0"
                                style={{ color: '#ef4444' }}
                              >
                                ✓
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* No incluye */}
                      {plan.notIncludes && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-text-primary mb-2 text-sm">No incluye:</h4>
                          <ul className="space-y-1">
                            {plan.notIncludes.map((item, index) => (
                              <li key={index} className="flex items-start space-x-2 text-xs text-text-muted">
                                <span className="text-text-muted mt-0.5 text-xs flex-shrink-0">✗</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Ideal para */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-text-primary mb-2 text-sm">Ideal para:</h4>
                        <div className="flex flex-wrap gap-1">
                          {plan.idealFor.map((item, index) => (
                            <Badge key={index} variant="primary" size="small">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Nota adicional */}
                      {plan.note && (
                        <div className="mb-4 p-2 bg-background-tertiary rounded-lg border border-dark-600">
                          <p className="text-xs text-text-secondary italic">
                            💡 {plan.note}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="pt-3 border-t border-dark-600 mt-auto px-2">
                      <Button 
                        to="/contacto"
                        variant={plan.popular ? 'primary' : 'outline'}
                        className="w-full text-center"
                        size="small"
                      >
                        Solicitar
                      </Button>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* DESKTOP: Grid normal mejorado */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan) => (
              <Card 
                key={plan.id} 
                variant={plan.popular ? 'featured' : 'secondary'}
                hover={true}
                className={`relative h-full flex flex-col ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge variant="primary">Más Popular</Badge>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    {plan.subtitle}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center">
                      {plan.priceNote && (
                        <span className="text-sm text-text-muted mr-1">{plan.priceNote}</span>
                      )}
                      <span 
                        className="text-3xl font-bold"
                        style={{
                          color: '#ef4444',
                          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                        }}
                      >
                        {plan.price.toLocaleString()}
                      </span>
                      <span className="text-text-secondary ml-1">{plan.currency}</span>
                    </div>
                    <p className="text-sm text-text-muted mt-1">
                      Entrega: {plan.deliveryTime}
                    </p>
                  </div>
                  
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Contenido flexible */}
                <div className="flex-grow">
                  {/* Incluye */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-text-primary mb-3 text-sm">Incluye:</h4>
                    <ul className="space-y-2">
                      {plan.includes.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2 text-xs text-text-secondary">
                          <span 
                            className="mt-0.5 text-xs"
                            style={{ color: '#ef4444' }}
                          >
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* No incluye */}
                  {plan.notIncludes && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-text-primary mb-3 text-sm">No incluye:</h4>
                      <ul className="space-y-2">
                        {plan.notIncludes.map((item, index) => (
                          <li key={index} className="flex items-start space-x-2 text-xs text-text-muted">
                            <span className="text-text-muted mt-0.5 text-xs">✗</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Ideal para */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-text-primary mb-3 text-sm">Ideal para:</h4>
                    <div className="flex flex-wrap gap-1">
                      {plan.idealFor.map((item, index) => (
                        <Badge key={index} variant="primary" size="small">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Nota adicional */}
                  {plan.note && (
                    <div className="mb-6 p-3 bg-background-tertiary rounded-lg border border-dark-600">
                      <p className="text-xs text-text-secondary italic">
                        💡 {plan.note}
                      </p>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-dark-600 mt-auto">
                  <Button 
                    to="/contacto"
                    variant={plan.popular ? 'primary' : 'outline'}
                    className="w-full text-center"
                  >
                    Solicitar
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Planes de mantenimiento - RESPONSIVE MEJORADO */}
      <Section background="tertiary">
        <div className="text-center mb-8 md:mb-12">
          <h2 
            className="text-2xl md:text-3xl font-heading font-bold mb-4"
            style={{
              color: '#f43c3c',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
            }}
          >
            Mantenimiento Mensual
          </h2>
          <p className="text-base md:text-lg text-text-secondary">
            Mantén tu página web actualizada y funcionando perfectamente
          </p>
        </div>
        
        {/* RESPONSIVE: Stack en móvil, grid en desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {maintenancePlans.filter(plan => plan.id !== 'premium-mant').map((plan) => (
            <Card 
              key={plan.id} 
              variant={plan.popular ? 'featured' : 'secondary'}
              hover={true}
              className="h-full flex flex-col"
            >
              {plan.popular && (
                <div className="text-center mb-4">
                  <Badge variant="primary">Recomendado</Badge>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span 
                    className="text-xl md:text-2xl font-bold"
                    style={{
                      color: '#ef4444',
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                    }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-text-secondary ml-1">{plan.currency}</span>
                </div>
                <p className="text-sm text-text-secondary">
                  {plan.description}
                </p>
              </div>

              {/* Contenido flexible */}
              <div className="flex-grow">
                <div className="mb-6">
                  <h4 
                    className="font-semibold mb-3"
                    style={{
                      color: '#f43c3c',
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                    }}
                  >
                    Incluye:
                  </h4>
                  <ul className="space-y-2">
                    {plan.includes.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-text-secondary">
                        <span 
                          className="mt-0.5"
                          style={{ color: '#ef4444' }}
                        >
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 p-3 bg-dark-700 rounded-lg border border-dark-600">
                  <div className="text-sm">
                    <span className="font-medium text-text-primary">Tiempo de respuesta:</span>
                    <span 
                      className="ml-1"
                      style={{ 
                        color: '#ef4444',
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
                      }}
                    >
                      {plan.responseTime}
                    </span>
                  </div>
                  <div className="text-xs text-text-secondary mt-1">
                    {plan.idealFor}
                  </div>
                </div>
              </div>

              {/* CTA al final */}
              <div className="mt-auto">
                <Button 
                  to="/contacto"
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full text-center"
                >
                  Contratar
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Servicios adicionales - RESPONSIVE MEJORADO */}
      <Section background="secondary">
        <div className="text-center mb-8 md:mb-12">
          <h2 
            className="text-2xl md:text-3xl font-heading font-bold mb-4"
            style={{
              color: '#f43c3c',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
            }}
          >
            Servicios Adicionales
          </h2>
          <p className="text-base md:text-lg text-text-secondary">
            Funcionalidades extra que puedes agregar a tu proyecto
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {additionalServices.map((service, index) => (
              <Card key={index} className="flex items-center justify-between p-4">
                <div>
                  <h3 className="font-semibold text-text-primary text-sm md:text-base">{service.name}</h3>
                  <p className="text-xs md:text-sm text-text-secondary">{service.unit}</p>
                </div>
                <div 
                  className="text-base md:text-lg font-bold"
                  style={{
                    color: '#ef4444',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                  }}
                >
                  {service.price} {service.currency}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Información importante - Responsive mejorado */}
      <InfoCards 
        cards={importantInfo}
        columns={4}
        showIconBackground={true}
        iconBackgroundClass="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl border-2 border-gray-200 shadow-sm"
        cardHover={true}
      />
    </PageLayout>
  );
};

export default Pricing;