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
        customblue: '#034671'
      },

      colors: {
        customblue: '#034671'
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
        295: '295px'
      },

      maxWidth: {
        840: '840px',
        500: '500px',
        712: '712px'
      },
      
      backgroundColor: {
        customblue: '#034671',
        customred: '#FF5A5C'
      },

      borderWidth: {
        3: '3px'
      },

      borderColor: {
        displayblue: '#0A20E6' 
      },
    },
  },
  plugins: [],
}
