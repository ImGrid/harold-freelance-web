// AGREGAR AL tailwind.config.js en la sección theme.extend

const animationConfig = {
  animation: {
    // Animaciones existentes se mantienen
    'fade-in': 'fadeIn 0.5s ease-in-out',
    'slide-up': 'slideUp 0.5s ease-out',
    'bounce-gentle': 'bounce 1s infinite',
    
    // NUEVAS ANIMACIONES PARA BACKGROUND EFFECTS
    'float-slow': 'floatSlow 25s ease-in-out infinite',
    'float-reverse': 'floatReverse 30s ease-in-out infinite',
    'drift': 'drift 35s linear infinite',
    'drift-reverse': 'driftReverse 40s linear infinite',
    'pulse-slow': 'pulseSlow 6s ease-in-out infinite',
    'breath': 'breath 15s ease-in-out infinite',
    'rotate-slow': 'rotateSlow 50s linear infinite',
    'shimmer': 'shimmer 8s ease-in-out infinite',
  },

  keyframes: {
    // Keyframes existentes se mantienen
    fadeIn: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
    slideUp: {
      '0%': { transform: 'translateY(20px)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' },
    },

    // NUEVOS KEYFRAMES PARA BACKGROUND EFFECTS
    floatSlow: {
      '0%, 100%': { 
        transform: 'translateY(0px) translateX(0px) scale(1)',
      },
      '25%': { 
        transform: 'translateY(-20px) translateX(10px) scale(1.05)',
      },
      '50%': { 
        transform: 'translateY(-10px) translateX(-5px) scale(0.95)',
      },
      '75%': { 
        transform: 'translateY(15px) translateX(-10px) scale(1.02)',
      },
    },

    floatReverse: {
      '0%, 100%': { 
        transform: 'translateY(0px) translateX(0px) scale(1)',
      },
      '25%': { 
        transform: 'translateY(15px) translateX(-8px) scale(0.98)',
      },
      '50%': { 
        transform: 'translateY(-5px) translateX(12px) scale(1.03)',
      },
      '75%': { 
        transform: 'translateY(-18px) translateX(5px) scale(0.97)',
      },
    },

    drift: {
      '0%': { 
        transform: 'translateX(-10px) translateY(-10px) rotate(0deg)',
        opacity: '0.3',
      },
      '25%': { 
        transform: 'translateX(5px) translateY(-20px) rotate(90deg)',
        opacity: '0.6',
      },
      '50%': { 
        transform: 'translateX(15px) translateY(-5px) rotate(180deg)',
        opacity: '0.4',
      },
      '75%': { 
        transform: 'translateX(-5px) translateY(10px) rotate(270deg)',
        opacity: '0.7',
      },
      '100%': { 
        transform: 'translateX(-10px) translateY(-10px) rotate(360deg)',
        opacity: '0.3',
      },
    },

    driftReverse: {
      '0%': { 
        transform: 'translateX(10px) translateY(10px) rotate(360deg)',
        opacity: '0.2',
      },
      '25%': { 
        transform: 'translateX(-8px) translateY(15px) rotate(270deg)',
        opacity: '0.5',
      },
      '50%': { 
        transform: 'translateX(-15px) translateY(-8px) rotate(180deg)',
        opacity: '0.3',
      },
      '75%': { 
        transform: 'translateX(6px) translateY(-12px) rotate(90deg)',
        opacity: '0.6',
      },
      '100%': { 
        transform: 'translateX(10px) translateY(10px) rotate(0deg)',
        opacity: '0.2',
      },
    },

    pulseSlow: {
      '0%, 100%': { 
        opacity: '0.4',
        transform: 'scale(1)',
      },
      '50%': { 
        opacity: '0.8',
        transform: 'scale(1.05)',
      },
    },

    breath: {
      '0%, 100%': { 
        opacity: '0.1',
        transform: 'scale(0.95)',
      },
      '50%': { 
        opacity: '0.3',
        transform: 'scale(1.05)',
      },
    },

    rotateSlow: {
      '0%': { 
        transform: 'rotate(0deg)',
      },
      '100%': { 
        transform: 'rotate(360deg)',
      },
    },

    shimmer: {
      '0%': {
        backgroundPosition: '-200% 0',
      },
      '100%': {
        backgroundPosition: '200% 0',
      },
    },
  }
};

// EXPORTAR PARA USAR EN tailwind.config.js
export default animationConfig;

/* 
INSTRUCCIONES DE USO:

1. Importar este archivo en tu tailwind.config.js:
import animationConfig from './src/animations/animationConfig.js';

2. Agregar a la configuración de Tailwind:
export default {
  theme: {
    extend: {
      ...animationConfig,
      // resto de tu configuración
    }
  }
}

3. O copiar directamente el contenido de animationConfig en theme.extend
*/