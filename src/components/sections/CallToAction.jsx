import { Section, Button } from '../ui';

const CallToAction = ({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  features,
  background = 'transparent',
  variant = 'gradient',
  containerClass = '',
  className = '',
  ...props
}) => {
  const variants = {
    gradient: {
      containerClass: 'bg-gradient-to-r from-accent-red to-primary-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-lg',
      titleClass: 'text-3xl font-heading font-bold mb-4',
      descriptionClass: 'text-xl mb-8 opacity-90',
      primaryButtonClass: 'bg-white text-accent-red hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors shadow-md',
      secondaryButtonClass: 'border-2 border-white text-white hover:bg-white hover:text-accent-red font-semibold px-8 py-4 rounded-lg transition-all'
    },
    simple: {
      containerClass: 'bg-background-secondary rounded-2xl p-8 md:p-12 text-center border border-dark-600',
      titleClass: 'text-3xl font-heading font-bold text-text-primary mb-4',
      descriptionClass: 'text-xl text-text-secondary mb-8',
      primaryButtonClass: '',
      secondaryButtonClass: ''
    },
    dark: {
      containerClass: 'bg-dark-900 rounded-2xl p-8 md:p-12 text-center border border-accent-red',
      titleClass: 'text-3xl font-heading font-bold text-text-primary mb-4',
      descriptionClass: 'text-xl text-text-secondary mb-8',
      primaryButtonClass: '',
      secondaryButtonClass: ''
    }
  };

  const config = variants[variant] || variants.gradient;

  return (
    <Section background={background} className={className} {...props}>
      <div className={`${config.containerClass} ${containerClass}`}>
        {title && (
          <h2 className={config.titleClass}>
            {title}
          </h2>
        )}
        
        {description && (
          <p className={config.descriptionClass}>
            {description}
          </p>
        )}
        
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {primaryCTA && (
              <Button 
                to={primaryCTA.to}
                href={primaryCTA.href}
                className={`${config.primaryButtonClass} ${primaryCTA.className || ''}`}
                onClick={primaryCTA.onClick}
              >
                {primaryCTA.text}
              </Button>
            )}
            
            {secondaryCTA && (
              <Button 
                to={secondaryCTA.to}
                href={secondaryCTA.href}
                className={`${config.secondaryButtonClass} ${secondaryCTA.className || ''}`}
                onClick={secondaryCTA.onClick}
              >
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        )}
        
        {features && features.length > 0 && (
          <div className="text-center opacity-75">
            <p className="text-sm">
              {features.map((feature, index) => (
                <span key={index}>
                  {feature.icon && <span className="mr-1">{feature.icon}</span>}
                  {feature.text}
                  {index < features.length - 1 && ' • '}
                </span>
              ))}
            </p>
          </div>
        )}
      </div>
    </Section>
  );
};

export default CallToAction;