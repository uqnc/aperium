/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'xss': '280px',
			'xs': '350px',
			'sm': '390px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1920px'
		},
		extend: {
			fontFamily: {
				satoshi: ['Satoshi', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
				monnserrat: ['Montserrat', 'sans-serif']
			},
		},
	},
	plugins: [],
}