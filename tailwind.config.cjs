module.exports = {
  // Pastikan Anda menggunakan 'purge' untuk v2
  purge: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  darkMode: false, // atau 'media' atau 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}