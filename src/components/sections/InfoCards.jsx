import { Section, Card } from '../ui';

const InfoCards = ({
  title,
  subtitle,
  cards = [],
  background = 'tertiary',
  columns = 'auto',
  showIconBackground = true,
  iconBackgroundClass = 'w-16 h-16 bg-white rounded-xl border-2 border-gray-200 shadow-sm',
  cardVariant = 'default',
  cardHover = true,
  titleColor = '#ef4444',
  titleTextShadow = '1px 1px 2px rgba(0, 0, 0, 0.7)',
  className = '',
  ...props
}) => {
  const getGridClasses = () => {
    if (columns === 'auto') {
      const count = cards.length;
      if (count <= 2) return 'grid-cols-1 md:grid-cols-2';
      if (count <= 4) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
    
    const gridMap = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
    };
    
    return gridMap[columns] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
  };

  if (!cards.length) return null;

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
        {cards.map((card, index) => (
          <Card 
            key={card.id || index} 
            variant={cardVariant}
            hover={cardHover} 
            className="text-center h-full"
          >
            {card.icon && (
              <div className="flex justify-center mb-4">
                {showIconBackground ? (
                  <div className={`flex items-center justify-center ${iconBackgroundClass}`}>
                    {card.icon}
                  </div>
                ) : (
                  card.icon
                )}
              </div>
            )}
            
            <h3 
              className="font-semibold mb-4"
              style={{
                color: card.titleColor || titleColor,
                textShadow: card.titleTextShadow || titleTextShadow
              }}
            >
              {card.title}
            </h3>
            
            {card.items && Array.isArray(card.items) && (
              <ul className="space-y-2 text-sm">
                {card.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-text-secondary">
                    {typeof item === 'string' ? `• ${item}` : item}
                  </li>
                ))}
              </ul>
            )}
            
            {card.content && (
              <div className="text-sm text-text-secondary">
                {card.content}
              </div>
            )}
            
            {card.description && !card.items && !card.content && (
              <p className="text-sm text-text-secondary leading-relaxed">
                {card.description}
              </p>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default InfoCards;