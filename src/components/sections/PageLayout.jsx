// Layout base para todas las páginas
// Proporciona estructura consistente y manejo de efectos de fondo

import BackgroundEffects from '../layout/animations/BackgroundEffects';

const PageLayout = ({ 
  children, 
  showBackgroundEffects = false,
  backgroundEffectsIntensity = 'low',
  className = '',
  ...props 
}) => {
  return (
    <div className={`relative min-h-screen ${className}`} {...props}>
      {/* Efectos de fondo opcionales - CORREGIDO: usar el archivo real */}
      {showBackgroundEffects && (
        <BackgroundEffects 
          showOrbs={true}
          showParticles={true} 
          showGlow={true}
          intensity={backgroundEffectsIntensity}
        />
      )}
      
      {/* Contenido de la página con z-index apropiado - CORREGIDO: z-index más alto */}
      <div className="relative z-50">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;