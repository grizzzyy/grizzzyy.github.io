/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom color palette: soft pink, mauve, cream, muted plum
      colors: {
        cream: {
          50: '#FFFDFB',
          100: '#FFF9F5',
          200: '#FFF3EB',
          300: '#FFEADC',
        },
        blush: {
          100: '#FFF0F3',
          200: '#FFE1E8',
          300: '#FFD1DC',
          400: '#FFBDCC',
          500: '#F5A3B5',
        },
        mauve: {
          100: '#F5EEF8',
          200: '#E8DCF0',
          300: '#D4C4E0',
          400: '#C0ABD1',
          500: '#A88BBE',
          600: '#8B6AA8',
        },
        plum: {
          400: '#9B7AA0',
          500: '#7D5A82',
          600: '#5F3D64',
          700: '#4A2D4E',
          800: '#3B2340',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(139, 106, 168, 0.1)',
        'soft-lg': '0 10px 40px -4px rgba(139, 106, 168, 0.15)',
        'glow': '0 0 30px -5px rgba(245, 163, 181, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
