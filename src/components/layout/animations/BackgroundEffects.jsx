import React from 'react';

const BackgroundEffects = ({ 
  showOrbs = true, 
  showParticles = true, 
  showGlow = true,
  intensity = 'low'
}) => {
  const intensityConfig = {
    low: {
      orbOpacity: 'opacity-20',
      particleOpacity: 'opacity-10',
      glowOpacity: 'opacity-5',
      animationSpeed: 'duration-[20s]'
    },
    medium: {
      orbOpacity: 'opacity-30',
      particleOpacity: 'opacity-20',
      glowOpacity: 'opacity-10',
      animationSpeed: 'duration-[15s]'
    },
    high: {
      orbOpacity: 'opacity-40',
      particleOpacity: 'opacity-30',
      glowOpacity: 'opacity-15',
      animationSpeed: 'duration-[10s]'
    }
  };

  const config = intensityConfig[intensity];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {showOrbs && (
        <div className="absolute inset-0">
          <div 
            className={`absolute top-20 left-10 w-32 h-32 rounded-full ${config.orbOpacity} ${config.animationSpeed} animate-float-slow`}
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(255, 38, 38, 0.3), rgba(255, 38, 38, 0.1), transparent 70%)',
              filter: 'blur(40px)',
              animationDelay: '0s'
            }}
          />
          
          <div 
            className={`absolute top-32 right-16 w-24 h-24 rounded-full ${config.orbOpacity} ${config.animationSpeed} animate-float-slow`}
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(255, 38, 38, 0.2), rgba(255, 38, 38, 0.05), transparent 70%)',
              filter: 'blur(30px)',
              animationDelay: '5s'
            }}
          />
          
          <div 
            className={`absolute bottom-40 left-20 w-40 h-40 rounded-full ${config.orbOpacity} ${config.animationSpeed} animate-float-slow`}
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(255, 38, 38, 0.25), rgba(255, 38, 38, 0.08), transparent 70%)',
              filter: 'blur(50px)',
              animationDelay: '10s'
            }}
          />
          
          <div 
            className={`absolute bottom-20 right-8 w-28 h-28 rounded-full ${config.orbOpacity} ${config.animationSpeed} animate-float-slow`}
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(255, 38, 38, 0.2), rgba(255, 38, 38, 0.06), transparent 70%)',
              filter: 'blur(35px)',
              animationDelay: '15s'
            }}
          />
        </div>
      )}

      {showParticles && (
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 ${config.particleOpacity} animate-float-particle`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            >
              <div 
                className={`w-full h-full rotate-45 animate-spin-slow ${Math.random() > 0.5 ? 'rounded-none' : 'rounded-full'}`}
                style={{
                  background: Math.random() > 0.5 
                    ? 'rgba(255, 38, 38, 0.3)' 
                    : 'rgba(246, 246, 246, 0.1)',
                  animationDuration: `${20 + Math.random() * 20}s`
                }}
              />
            </div>
          ))}
        </div>
      )}

      {showGlow && (
        <div className="absolute inset-0">
          <div 
            className={`absolute top-0 left-0 w-96 h-96 ${config.glowOpacity} animate-pulse-slow`}
            style={{
              background: 'radial-gradient(circle at center, rgba(255, 38, 38, 0.1), transparent 70%)',
              filter: 'blur(60px)',
              animationDuration: '8s'
            }}
          />
          
          <div 
            className={`absolute bottom-0 right-0 w-80 h-80 ${config.glowOpacity} animate-pulse-slow`}
            style={{
              background: 'radial-gradient(circle at center, rgba(255, 38, 38, 0.08), transparent 70%)',
              filter: 'blur(80px)',
              animationDuration: '12s',
              animationDelay: '4s'
            }}
          />
        </div>
      )}

      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"
          style={{ animationDuration: '6s' }}
        />
        <div 
          className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"
          style={{ animationDuration: '8s', animationDelay: '3s' }}
        />
      </div>
    </div>
  );
};

export default BackgroundEffects;