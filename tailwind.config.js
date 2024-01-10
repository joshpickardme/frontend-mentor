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
        // FEM Colours
        'fem-cyan': '#6ABECD',
        'fem-lime': '#AAD742',
        'fem-yellow': '#F1B604',
        'fem-orange': '#F48925',
        'fem-red': '#ED2C49',
        'fem-pink': '#CF6390',
        'fem-blue': '#4358A6',
        // Blog Preview Card
        'bpc-black':'#111111', 
        'bpc-pure-white':'#FFFFFF', 
        'bpc-yellow':'#F4D04E', 
        'bpc-grey':'#7F7F7F',
        // Newsletter Signup
        'news-grey': '#19182B',
        'news-pale-navy': '#36384D',
        'news-dark-navy': '#242742',
        'news-vermellion': '#FF6155',
        // Interactive Rating
        'rating-dark-blue': '#262E38',
        'rating-light-grey': '#969FAD',
        'rating-medium-grey': '#7C8798',
        'rating-orange': '#FC7614',
        'rating-very-dark-blue': '#131518',
        // Order Summary
        'order-pale-blue': 'hsl(225, 100%, 94%)',
        'order-bright-blue': 'hsl(245, 75%, 52%)',
        'order-very-pale-blue': 'hsl(225, 100%, 98%)',
        'order-desaturated-blue': 'hsl(224, 23%, 55%)',
        'order-dark-blue': 'hsl(223, 47%, 23%)',
        'order-purple': '#766CF1'
        }, 
    },
  },
  plugins: [],
}
