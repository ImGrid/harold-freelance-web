/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#fff0f0',   // Rojo muy claro para fondos
          '100': '#ffdddd',  // Rojo claro
          '200': '#ffc1c1',  // Rojo suave
          '300': '#ff9595',  // Rojo medio
          '400': '#ff5959',  // Rojo vibrante
          '500': '#ff2626',  // Rojo principal - CTAs
          '600': '#fc0606',  // Rojo intenso
          '700': '#db0000',  // Rojo oscuro
          '800': '#af0505',  // Rojo muy oscuro
          '900': '#900c0c',  // Rojo profundo
          '950': '#500000',  // Rojo casi negro
        },
        
        // Paleta de negros/grises
        'dark': {
          '50': '#f6f6f6',   // Casi blanco
          '100': '#e7e7e7',  // Gris muy claro
          '200': '#d1d1d1',  // Gris claro
          '300': '#b0b0b0',  // Gris medio
          '400': '#888888',  // Gris
          '500': '#6d6d6d',  // Gris oscuro
          '600': '#5d5d5d',  // Gris muy oscuro
          '700': '#4f4f4f',  // Gris carbón
          '800': '#454545',  // Casi negro
          '900': '#3d3d3d',  // Negro grisáceo
          '950': '#000000',  // Negro puro
        },
        
        // Alias para facilitar el uso
        'background': {
          'primary': '#000000',      // Negro puro para fondos principales
          'secondary': '#3d3d3d',    // Gris oscuro para cards
          'tertiary': '#454545',     // Gris para secciones
        },
        
        'text': {
          'primary': '#f6f6f6',      // Blanco para texto principal
          'secondary': '#e7e7e7',    // Gris claro para texto secundario
          'muted': '#b0b0b0',        // Gris para texto menos importante
        },
        
        'accent': {
          'red': '#ff2626',          // Rojo vampire parrot para acentos
          'red-dark': '#db0000',     // Rojo más oscuro para hovers
          'red-light': '#ff5959',    // Rojo más claro para fondos
        },
        
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          700: '#15803d',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          700: '#a16207',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          700: '#b91c1c',
        }
      },
      
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounce 1s infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      
      boxShadow: {
        'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.3)',
        'medium': '0 4px 25px 0 rgba(0, 0, 0, 0.4)',
        'strong': '0 8px 30px 0 rgba(0, 0, 0, 0.5)',
        'red-glow': '0 0 20px rgba(255, 38, 38, 0.3)',
        'inner-dark': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.6)',
      },
      
      backgroundImage: {
        'gradient-vampire': 'linear-gradient(135deg, #000000 0%, #3d3d3d 50%, #000000 100%)',
        'gradient-red': 'linear-gradient(135deg, #ff2626 0%, #db0000 100%)',
        'gradient-dark': 'linear-gradient(135deg, #454545 0%, #3d3d3d 100%)',
      }
    },
  },
  plugins: [],
}