/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/Products.js","./components/Navbar.js" , "./components/About.js" , "./components/Home.js" , "./components/Banner.js","./components/Site.js"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}

