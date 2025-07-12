// tailwind.config.js

const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
  // यह हिस्सा बहुत ज़रूरी है
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // यह सुनिश्चित करता है कि src फोल्डर की फाइलें स्कैन हों
  ],
  
  theme: {
    extend: {
      textShadow: {
        '3d-white': '1px 1px 0 #d1d5db, 2px 2px 0 #d1d5db, 3px 3px 0 #d1d5db, 4px 4px 0 #d1d5db, 5px 5px 0 #d1d5db, 6px 6px 10px rgba(0,0,0,0.3)',
      },
    },
  },
  
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        { 'text-shadow': (value) => ({ textShadow: value }) },
        { values: theme('textShadow') }
      )
    }),
  ],
}