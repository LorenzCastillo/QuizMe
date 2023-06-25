/* eslint-disable no-undef */
module.exports = {
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
	],
	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	settings: { react: { version: "18.2" } },
	plugins: ["react-refresh"],
	rules: {
		"no-console": "warn",
		"indent": ["warn", "tab"],
		"semi": ["warn", "always"],
		"quotes": ["warn", "double"],
		"no-multi-spaces": "warn",
		"no-trailing-spaces": "warn",
		"object-curly-spacing": ["warn", "always"],
		"no-var": "error",
		"newline-before-return": "warn",
		"camelcase": "warn"
	}
};