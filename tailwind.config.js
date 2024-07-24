/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "text-reveal": "text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s",
      },
      keyframes: {
        "text-reveal": {
          "0%": {
            transform: "translate(0, 100%)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
      },
      fontFamily: {
        PlaywriteÖsterreich: ['Playwrite BE VLG'], 
        PlaywriteBE: ['Playwrite BE WAL'],
        Caveat: ['Caveat'],
        IndieFlower: ['Indie Flower']
      },
    },
  },
  plugins: [],
}
