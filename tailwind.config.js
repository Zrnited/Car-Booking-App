/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        segoe: ["Segoe UI", "Roboto"],
        'body': 'Poppins'
      },

      textColor: {
        customblue: '#0A20E6'
      },

      colors: {
        customblue: '#0A20E6'
      },

      height: {
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px',
        36: '36px',
        50: '50px',
        2: '2px'
      },

      width: {
        75: '75px',
        95: '95%',
        90: '90%',
        375: '365px',
      },

      maxWidth: {
        840: '840px'
      },
      
      backgroundColor: {
        customblue: '#0A20E6'
      },

      borderWidth: {
        3: '3px'
      },

      borderColor: {
        displayblue: '#0A20E6' 
      }
    },
  },
  plugins: [],
}
