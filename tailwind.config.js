/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
            textShadow: {
       red: '2px 2px 4px red',
        blue: '2px 2px 4px blue',
        glow: '0 0 8px #00f',
        custom: '2px 2px 5px rgba(255, 0, 0, 0.5)',
        sm: '1px 1px 2px black',
        default: '2px 2px 4px gray',
        lg: '3px 3px 6px rgba(0,0,0,0.3)',
        box: "5px 5px 15px gray",
      },
      

    },
  },
  plugins: [
     require('tailwindcss-textshadow'),
  ],
}


