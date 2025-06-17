const Badge = ({ 
  children, 
  variant = 'primary',
  size = 'default',
  className = '',
  ...props 
}) => {
  // Variantes de estilo
  const variants = {
    primary: 'tag-primary',
    secondary: 'tag-secondary',
    technology: 'tag-technology'
  };

  // Tamaños
  const sizes = {
    small: 'text-xs px-2 py-1',
    default: 'text-sm px-3 py-1', 
    large: 'text-base px-4 py-2'
  };

  const classes = `${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

export default Badge;