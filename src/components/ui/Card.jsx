const Card = ({ 
  children, 
  variant = 'default',
  hover = false,
  className = '',
  ...props 
}) => {
  // Variantes de estilo
  const variants = {
    default: 'card',
    secondary: 'card-secondary', 
    featured: 'card-featured'
  };

  // Efecto hover
  const hoverEffect = hover ? 'hover:shadow-strong hover:-translate-y-1 transition-all duration-300' : '';

  const classes = `${variants[variant]} ${hoverEffect} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;