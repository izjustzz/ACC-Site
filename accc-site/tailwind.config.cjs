module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        'brand-aqua': '#00A8D8',
        'brand-teal': '#0FA3A0',
        'brand-pink': '#FF4DA6',
        'brand-orange': '#FF8C42',
        'brand-navy': '#072145',
        'muted-600': '#6B7280'
      }
    }
  },
  plugins: []
}
