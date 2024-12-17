import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				main: "#1aa63d",
				apple: {
					"50": "#f0fdf2",
					"100": "#ddfbe3",
					"200": "#bcf6c9",
					"300": "#88eda1",
					"400": "#4ddb70",
					"500": "#26c14d",
					"600": "#1aa63d",
					"700": "#177e32",
					"800": "#18632b",
					"900": "#155226",
					"950": "#062d11",
				},
				curious: {
					"50": "#f2f9fd",
					"100": "#e5f0f9",
					"200": "#c4e1f3",
					"300": "#90c8e9",
					"400": "#55acdb",
					"500": "#2f92c8",
					"600": "#2075a9",
					"700": "#1b5d89",
					"800": "#1a4f72",
					"900": "#1b435f",
					"950": "#122b3f",
				},

				overlay: "rgba(0,0,0,0.8)", // background color overlay for alert dialogs, modals, etc.

				// light mode
				bg: "#fff4e0",
				text: "#000",
				border: "#000",

				// dark mode
				darkBg: "#272933",
				darkText: "#eeefe9",
				darkBorder: "#000",
				secondaryBlack: "#212121", // opposite of plain white, not used pitch black because borders and box-shadows are that color
			},
			borderRadius: {
				base: "3px",
			},
			boxShadow: {
				light: "4px 4px 0px 0px #000",
				dark: "4px 4px 0px 0px #000",
			},
			translate: {
				boxShadowX: "4px",
				boxShadowY: "4px",
				reverseBoxShadowX: "-4px",
				reverseBoxShadowY: "-4px",
			},
			fontWeight: {
				base: "500",
				heading: "800",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
