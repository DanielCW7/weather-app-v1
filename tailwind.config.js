/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "src/App.js",
    "src/containers/footer.js",
    "src/containers/forecastBody.js",
    "src/containers/forecastS1.js",
    "src/containers/forecastS2.js",
    "src/containers/hero.js",
    "src/containers/nav.js",
    "src/components/card.js",
    "src/components/form.js",
    "src/components/todayWeather.js",
    "src/components/week.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'storm-pattern': "url('./images/storm.webp')",
        'sunny-pattern': "url('./images/sunny.webp')",
        'sunny2-pattern': "url('./images/sunny2.webp')",
        'city-pattern': "url('./images/city.webp')",
        'sunset-pattern': "url('./images/sunset.webp')",
        'rain-pattern': "url('./images/rain.webp')",
        'lightning-pattern': "url('./images/lightning.webp')",

      },
      minHeight: {
        '10h': '10vh',
        '20h': '20vh',
        '30h': '30vh',
        '40h': '40vh',
        '50h': '50vh',
        '60h': '60vh',
        '70h': '70vh',
        '80h': '80vh',
        '90h': '90vh',
        '100h': '100vh',
        // 
        '10p': '10%',
        '20p': '20%',
        '30p': '30%',
        '40p': '40%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '100p': '100%'
      },
      maxHeight: {
        '10h': '10vh',
        '20h': '20vh',
        '30h': '30vh',
        '40h': '40vh',
        '50h': '50vh',
        '60h': '60vh',
        '70h': '70vh',
        '80h': '80vh',
        '90h': '90vh',
        // 
        '10p': '10%',
        '20p': '20%',
        '30p': '30%',
        '40p': '40%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '100p': '100%'
      },
      maxWidth: {
        '10h': '10vh',
        '20h': '20vh',
        '30h': '30vh',
        '40h': '40vh',
        '50h': '50vh',
        '60h': '60vh',
        '70h': '70vh',
        '80h': '80vh',
        '90h': '90vh',
        // 
        '10p': '10%',
        '20p': '20%',
        '30p': '30%',
        '40p': '40%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '100p': '100%'
      },
      width: {
        '10': '10%',
        '20': '20%',
        '30': '30%',
        '40': '40%',
        '50': '50%',
        '60': '60%',
        '70': '70%',
        '80': '80%',
        '90': '90%',
      }
    },
  },
  plugins: [],
}

// #501D6D purple
// #281D6D dark blue
// #1D396D lighter blue
