/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        'primary-color': "#F8523B",
        'green': '#0D7C91',
        'dark-black': '#03141A',
        'gray': "#4F5B5E",
        'gray-light': "#B4BEC1",
        'orange': '#41cece',
        'orange-light': "#edf8f8"
      },
      borderRadius: {
        'custom-tl-br': '40px 0px',
        'secondary-tl-br': '0px 20px',
        'tertiary-tl-br': '20px 0px',
        'confiramtion-tl-br': '0 80px'
      },
      listStyleType: {
        square: 'square',
      },
    },
  },
  plugins: [],
}

