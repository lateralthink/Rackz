module.exports = {
  content: ['./public/**/*.{html,js}'],
  safelist: [
    'lt-album-card-price-and-amount',
    'lt-album-card-price',
    'mlkln3-no-access-passports',
    'mlkln3-no-access-passport'
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}