// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // The deep background colors
        brand: {
          black: '#050505', // Main background
          dark: '#0A0118',  // Secondary dark
          purple: '#5B21B6', // Glow color
          pink: '#DB2777',   // Accent glow
        }
      },
      backgroundImage: {
        // The specific glow effect seen in the top left
        'hero-glow': 'conic-gradient(from 90deg at 50% 50%, #000000 0%, #1a0b2e 50%, #000000 100%)',
        'glass-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Ensure you use a clean font
      }
    },

    extend: {
  animation: {
    'float-slow': 'float 6s ease-in-out infinite',
    'float-delayed': 'float 6s ease-in-out 3s infinite',
  },
  keyframes: {
    float: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-20px)' },
    }
  }
}
  },
}