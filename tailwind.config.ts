import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        '3/4vh': '82vh',
      },
      keyframes:{
        rotate: {
          '0%, 100%': { transform : 'rotate(0 deg)'},
          '50%': { transform : 'rotate(360 deg)'},
        },
      },
      animation:{
        "spin-slow":'rotate 20s infinite'
      }
    },
  },
  plugins: [],
};
export default config;
