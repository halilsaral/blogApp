/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'roboto': ['Roboto']
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-15px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        bounce: 'bounce 1s ease infinite',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
  plugins: [],
}
