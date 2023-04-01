/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'wave-pattern': "url('/bg-wave.svg')",
        'wave-pattern-2': "url('/bg-2.svg')"
      },
      animation: {
        'scale-in': 'zoom 1s linear',
        'fade-in': 'fadeIn 1.5s linear',
        'in-view-bottom': 'in-view-bottom 1s ease-in-out',
        'in-view-top': 'in-view-top 1s ease-in-out'
      },
      keyframes: {
        zoom: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'in-view-bottom': {
          '0%': { transform: 'translateY(20%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'in-view-top': {
          '0%': { transform: 'translateY(-20%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    }
  },
  plugins: []
};