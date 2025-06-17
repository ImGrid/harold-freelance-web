import { Section, Card } from '../ui';

const FeatureGrid = ({
  title,
  subtitle,
  features = [],
  background = 'secondary',
  columns = 'auto',
  showIconBackground = true,
  iconBackgroundClass = 'w-20 h-20 bg-white rounded-full border-2 border-gray-200 shadow-sm',
  cardVariant = 'default',
  cardHover = true,
  className = '',
  ...props
}) => {
  const getGridClasses = () => {
    if (columns === 'auto') {
      const count = features.length;
      if (count <= 2) return 'grid-cols-1 md:grid-cols-2';
      if (count <= 3) return 'grid-cols-1 md:grid-cols-3';
      if (count <= 4) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      if (count <= 6) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
    }
    
    const gridMap = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
      6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
    };
    
    return gridMap[columns] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
  };

  if (!features.length) return null;

  return (
    <Section background={background} className={className} {...props}>
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && (
            <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      
      <div className={`grid ${getGridClasses()} gap-8`}>
        {features.map((feature, index) => (
          <Card 
            key={feature.id || index} 
            variant={cardVariant}
            hover={cardHover} 
            className="text-center h-full"
          >
            {feature.icon && (
              <div className="flex justify-center mb-4">
                {showIconBackground ? (
                  <div className={`flex items-center justify-center ${iconBackgroundClass}`}>
                    {feature.icon}
                  </div>
                ) : (
                  feature.icon
                )}
              </div>
            )}
            
            <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-3">
              {feature.title}
            </h3>
            
            {feature.subtitle && (
              <p 
                className="font-medium mb-3"
                style={{
                  color: feature.subtitleColor || '#f43c3c',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                }}
              >
                {feature.subtitle}
              </p>
            )}
            
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              {feature.description}
            </p>
            
            {feature.content && (
              <div className="mt-4">
                {feature.content}
              </div>
            )}
            
            {feature.cta && (
              <div className="mt-4">
                {feature.cta}
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default FeatureGrid;