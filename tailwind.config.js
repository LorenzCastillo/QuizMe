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
				"custom-dark-grey": "#0E1217",
				"custom-green": "#34AB0A",
				"custom-yellow": "#E1A124"
			},
			screens: {
				"3xl": "1792px"
			},
			animation: {
				card: "card 1s ease-in-out",
				pageTurnIn: "pageTurnIn 1s ease-in-out",
				pageTurnOut: "pageTurnOut 1s ease-in-out",
				fadeIn: "fadeIn 0.6s ease-in-out",
				fadeOut: "fadeOut 0.6s ease-in-out",
				fadeInLong: "fadeIn 1.2s ease-in-out",
			},
			keyframes: {
				card: {
					"0%": {
						transform: "translate(0px, 70px) scale(0.85)",
						opacity: "0",
					},
					"100%": {
						transform: "translate(0px, 0px) scale(1)",
						opacity: "1"
					}
				},
				pageTurnIn: {
					"0%": {
						transform: "translate(50px, 0px)",
						opacity: "0",
					},
					"100%": {
						transform: "translate(0px, 0px)",
						opacity: "1"
					}
				},
				pageTurnOut: {
					"0%": {
						transform: "translate(0px, 0px)",
						opacity: "1",
					},
					"100%": {
						transform: "translate(-50px, 0px)",
						opacity: "0"
					}
				},
				fadeIn: {
					"0%": {
						opacity: "0",
					},
					"100%": {
						opacity: "1"
					}
				},
				fadeOut: {
					"0%": {
						opacity: "1",
					},
					"100%": {
						opacity: "0"
					}
				},
				fadeInLong: {
					"0%": {
						opacity: "0",
					},
					"100%": {
						opacity: "1"
					}
				},
			}
		},
	},
	plugins: [],
};