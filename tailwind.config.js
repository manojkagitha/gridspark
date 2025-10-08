// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#F59E0B",
        accent: "#10B981",
        dark: "#101525",
        light: "#F8FAFC",
        text: "#334155",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],      // Already modern!
      },
    },
  },
  plugins: [],
};
