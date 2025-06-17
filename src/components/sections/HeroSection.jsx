// Componente reutilizable para secciones Hero
// Estructura consistente para todas las páginas principales

import { Section, Button } from '../ui';

const HeroSection = ({ 
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  background = 'hero',
  maxWidth = 'max-w-4xl',
  titleHighlight, // Para palabras destacadas en rojo
  titleSize = 'default', // 'default', 'large', 'extra-large'
  className = '',
  ...props 
}) => {
  // Tamaños de título configurables
  const titleSizes = {
    default: 'text-4xl md:text-5xl',
    large: 'text-4xl md:text-6xl',     // Para Home - tamaño original
    'extra-large': 'text-5xl md:text-7xl'
  };

  // Procesar título con highlight si se proporciona
  const renderTitle = () => {
    if (!titleHighlight) {
      return <span>{title}</span>;
    }

    // Dividir el título y aplicar highlight a la parte especificada
    const parts = title.split(titleHighlight.text);
    
    return (
      <>
        {parts[0]}
        <span 
          className="text-red-deep"
          style={{
            color: titleHighlight.color || '#dc2626',
            textShadow: titleHighlight.textShadow || '2px 2px 4px rgba(0, 0, 0, 0.9)'
          }}
        >
          {titleHighlight.text}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <Section background={background} className={className} {...props}>
      <div className={`${maxWidth} mx-auto text-center`}>
        <h1 className={`${titleSizes[titleSize]} font-heading font-bold text-text-primary mb-6 text-high-contrast`}>
          {renderTitle()}
        </h1>
        
        {subtitle && (
          <h2 className="text-xl md:text-2xl text-text-secondary mb-4">
            {subtitle}
          </h2>
        )}
        
        {description && (
          <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
        )}
        
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCTA && (
              <Button 
                to={primaryCTA.to}
                href={primaryCTA.href}
                size={primaryCTA.size || 'large'}
                className={primaryCTA.className}
              >
                {primaryCTA.text}
              </Button>
            )}
            
            {secondaryCTA && (
              <Button 
                to={secondaryCTA.to}
                href={secondaryCTA.href}
                variant={secondaryCTA.variant || 'secondary'}
                size={secondaryCTA.size || 'large'}
                className={secondaryCTA.className}
              >
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        )}
      </div>
    </Section>
  );
};

export default HeroSection;