module.exports = {
  theme: {
    extend: {
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'gradient-color': {
          '0%, 100%': { 'background-color': '#ffafbd' },
          '50%': { 'background-color': '#ffc3a0' },
        },
      },
      animation: {
        'gradient-move': 'gradient-shift 5s ease infinite',
        'gradient-change': 'gradient-color 5s ease infinite',
      },
    },
  },
  plugins: [],
}
