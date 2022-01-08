const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
			},
			colors: {
				primary: colors.lime
			}
		}
	},

	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/line-clamp")]
};

module.exports = config;
