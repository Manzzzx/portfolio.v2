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
        primary: '#FFD700',
        secondary: '#FF69B4',
        accent: '#00CED1',
        'neu-black': '#1a1a1a',
        'neu-white': '#ffffff',
        light: '#f0f0f0',
      },
      boxShadow: {
        'neu': '4px 4px 0 0 #1a1a1a',
        'neu-lg': '8px 8px 0 0 #1a1a1a',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}

export default config;
