/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
		  fontFamily: {
			  sans: ['Manrope', 'sans-serif'],
		  },
		  screens: {
			  md: '768px',
			  lg: '1110px',
		  },
		  colors: {
			  orange: {
				  'primary': '#FBAF85',
				  'secondary': '#D87D4A',
			  },
			  white: {
				  'text': '#FFFFFF',
				  'primary': '#FAFAFA',
				  'secondary': '#F1F1F1',
			  },
			  black: '#191919',
		  },
		  width: {
			  '3/10': '30%',
			  '7/10': '70%',
			  '9/10': '90%',
		  },
    },
  },
  plugins: [],
}
