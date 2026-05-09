/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        script: ['"Great Vibes"', "cursive"],
      },
      colors: {
        primary: {
          DEFAULT: "#F97316",
          hover: "#EA6B0A",
        },
        accent: {
          blue: "#3B82F6",
          "blue-light": "#60A5FA",
        },
        dark: {
          bg: "#0F172A",
          surface: "#1E293B",
          card: "#1A2744",
          border: "#2E3D5F",
          "nav-bg": "#0A1628",
        },
        light: {
          bg: "#FFFFFF",
          surface: "#F8FAFC",
          card: "#FFFFFF",
          border: "#E2E8F0",
          "nav-bg": "#FFFFFF",
        },
      },
      fontSize: {
        "display": ["36px", { lineHeight: "100%", letterSpacing: "0%", fontWeight: "500" }],
        "body-lg": ["20px", { lineHeight: "100%", letterSpacing: "0%", fontWeight: "500" }],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0A1628 0%, #1a3a5c 50%, #0d3260 100%)",
        "hero-radial": "radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 60%)",
      },
      boxShadow: {
        card: "0 2px 12px rgba(0, 0, 0, 0.08)",
        "card-dark": "0 2px 12px rgba(0, 0, 0, 0.3)",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

module.exports = config;