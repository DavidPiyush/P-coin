/** @type {import('tailwindcss').Config} */
module.exports = {
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
      textColor: {
        sunrise: "#5b4406",
        sunriseLight: "#7f6f53",
        slateGray: "#2f4f4f",
      },
      colors: {
        coolGray: "#e5e8eb",
      },
    },
    fontFamily: {
      suse: ["SUSE", "sans-serif"],
    },
  },
  plugins: [],
};
