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
      {showBackgroundEffects && (
        <BackgroundEffects 
          showOrbs={true}
          showParticles={true} 
          showGlow={true}
          intensity={backgroundEffectsIntensity}
        />
      )}
      
      <div className="relative z-50">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;