/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color-1': 'blue', // 黑色背景颜色，可以根据需要调整颜色值
      },
    },
  },
  plugins: [],
}