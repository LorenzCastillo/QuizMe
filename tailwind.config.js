/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			"alte-bold": ["AlteHaasGroteskBold", "sans-serif"],
			"alte-rg": ["AlteHaasGroteskRegular", "sans-serif"]
		},
		extend: {
			colors: {
				"custom-red": "#F53838",
				"custom-grey": "#1C1F26",
				"custom-dark-grey": "#0E1217"
			},
			screens: {
				"3xl": "1792px"
			}
		},
	},
	plugins: [],
};