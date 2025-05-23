import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5733',
        secondary: '#2ECC71',
        accent: '#F1C40F',
        dark: '#2C3E50',
        light: '#ECF0F1',
        'neu-black': '#000000',
        'neu-white': '#FFFFFF',
      },
      boxShadow: {
        'neu': '4px 4px 0 0 #000000',
        'neu-lg': '8px 8px 0 0 #000000',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}

export default config;
