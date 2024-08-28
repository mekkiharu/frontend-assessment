/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-banner": "url('https://via.placeholder.com/1920x650')",
        "hero-banner-mobile": "url('https://via.placeholder.com/600x600')",
      },
    },
  },
  plugins: [],
};
