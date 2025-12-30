export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0ef",
        dark: "#01010A",
      },
      boxShadow: {
        neon: "0 0 25px #00E5FF",
      },
      animation: {
        pulseGlow: "pulseGlow 2.5s infinite ease-in-out",
        twinkle: "twinkle 3s infinite ease-in-out",
        float: "float 6s infinite ease-in-out",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 5px #00E5FF, 0 0 15px #00E5FFAA" },
          "50%": { boxShadow: "0 0 15px #00E5FF, 0 0 35px #00E5FF" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      dropShadow: {
        neon: "0 0 8px #00E5FF",
      },
    },
  },
  plugins: [],
};
