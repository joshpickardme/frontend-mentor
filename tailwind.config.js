/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: { 
        // Blog Preview Card
        'bpc-black':'#111111', 
        'bpc-pure-white':'#FFFFFF', 
        'bpc-yellow':'#F4D04E', 
        'bpc-grey':'#7F7F7F',
        // Newsletter Signup
        'news-grey': '#19182B',
        'news-pale-navy': '#36384D',
        'news-dark-navy': '#242742',
        'news-vermellion': '#FF6155'
        }, 
    },
  },
  plugins: [],
}
