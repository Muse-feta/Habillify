/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./context/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#0B121B", // dark background
        secondary: "#cc001f", // your chosen accent
        surfaceDark: "#121723", // input bg, panels
        "text-light": "#FFFFFF", // text on dark bg
        "text-dark": "#16171C", // text on light bg
        "text-faded-light": "#FFFFFF80", // semi-transparent white
        "text-faded-dark": "#000000A6", // semi-transparent black
        border: "#3A3D43",
        disabled: "#50555E",
        error: "#FF4C61",
        success: "#4CAF50",
        surface: "#25282D", // for cards, input bg in dark mode
        backgroundLight: "#FFFFFF",
        surfaceLight: "#F5F5F5",
        borderLight: "#E0E0E0",
        disabledLight: "#C4C4C4",
        textSecondaryLight: "#6B6F75",
      },
    },
  },
  plugins: [],
};



