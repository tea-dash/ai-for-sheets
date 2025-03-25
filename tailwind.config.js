/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          dark: '#4338CA',
        },
        secondary: {
          DEFAULT: '#10B981',
          dark: '#059669',
        },
        dark: '#111827',
        light: "#F9FAFB",
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
} 