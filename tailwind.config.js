/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1024px',
		},
		backgroundImage: {
			'hero-desktop': "url('/home/desktop/image-hero.jpg')",
			'hero-mobile': "url('/home/mobile/image-header.jpg')",
			'hero-tablet': "url('/home/tablet/image-header.jpg')",
			'pattern-circle-svg': "url('/home/desktop/pattern-circles.svg')"
		},
		colors: {
			orange: {
				'primary': '#FBAF85',
				'secondary': '#D87D4A',
			},
			red: {
				600: '#CD2C2C',
			},
			white: {
				'text': '#FFFFFF',
				'primary': '#FAFAFA',
				'secondary': '#F1F1F1',
			},
			black: {
			   'banner': '#191919',
				200: '#CFCFCF',
				400: '#979797',
				600: '#4c4c4c',
				800: '#101010',
				900: '#000000',
			},
			
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