const Section = ({ 
  children, 
  background = 'primary',
  hero = false,
  className = '',
  container = true,
  ...props 
}) => {
  // Variantes de fondo
  const backgrounds = {
    primary: 'bg-background-primary',
    secondary: 'bg-background-secondary',
    tertiary: 'bg-background-tertiary',
    hero: 'hero-simple',
    transparent: ''
  };

  // Padding de sección
  const sectionPadding = 'section-padding';
  
  // Container
  const containerClass = container ? 'container-custom' : '';

  const sectionClasses = `${sectionPadding} ${backgrounds[background]} ${className}`;

  if (container) {
    return (
      <section className={sectionClasses} {...props}>
        <div className={containerClass}>
          {children}
        </div>
      </section>
    );
  }

  return (
    <section className={sectionClasses} {...props}>
      {children}
    </section>
  );
};

export default Section;