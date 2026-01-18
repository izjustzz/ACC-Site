module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
        heading: ['Redaction', 'serif'],
        serif: ['Playfair Display', 'serif']
      },
      colors: {
        'brand-cyan': '#00B8A9',
        'brand-teal': '#003D5C',
        'brand-light-cyan': '#00E5D1',
        'dark-bg': '#0a1a2e',
        'card-bg': '#1a2f4a',
        'muted-600': '#8B96A8',
        'gradient-start': '#003D5C',
        'gradient-end': '#00B8A9'
      },
      backgroundImage: {
        'gradient-teal-cyan': 'linear-gradient(135deg, #0a3a4a 0%, #00a87a 100%)'
      }
    }
  },
  plugins: []
}
