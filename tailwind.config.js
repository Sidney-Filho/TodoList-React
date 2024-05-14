/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray100: '#F2F2F2',
        gray300: '#808080',
        gray400: '#333333',
        gray500: '#262626',
        gray600: '#1A1A1A',
        red300: '#E25858',
        purple300: '#8284FA',
        blue100: '#4EA8DE',
        darkPurple: '#5E60CE',
        darkBlue: '#1E6F9F'
      }
    },
  },
  plugins: [],
}


