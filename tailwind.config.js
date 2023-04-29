/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/Products.js","./src/components/Navbar.js" , "./src/components/About.js" , "./src/components/Home.js" , "./src/components/Banner.js","./src/components/Site.js"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}

