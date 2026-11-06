/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Deep blues used for the hero overlay, dark sections and text
        navy: {
          50: "#eef3fb",
          100: "#d9e3f4",
          200: "#b4c6e8",
          300: "#869fd4",
          400: "#5877bb",
          500: "#37589f",
          600: "#264484",
          700: "#1b3568",
          800: "#12264d",
          900: "#0b1b3b",
          950: "#050f26",
        },
        // The single accent colour: a clear, clinical aqua
        aqua: {
          50: "#ecfcfe",
          100: "#d0f6fb",
          200: "#a6ecf6",
          300: "#6edcec",
          400: "#3fd0e3",
          500: "#1fb6cc",
          600: "#0f93a9",
          700: "#0b7587",
        },
        mist: "#f2f6fa",
      },
      fontFamily: {
        display: ['"Instrument Serif"', "Georgia", "serif"],
        sans: ['"Hanken Grotesk"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px -24px rgba(11, 27, 59, 0.28)",
        lift: "0 34px 80px -28px rgba(11, 27, 59, 0.4)",
        glow: "0 0 90px rgba(63, 208, 227, 0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(40px, -30px) scale(1.12)" },
        },
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        ring: {
          "0%": { transform: "scale(0.6)", opacity: "0.5" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        float: "float 9s ease-in-out infinite",
        drift: "drift 16s ease-in-out infinite",
        "spin-slow": "spin 90s linear infinite",
        "spin-reverse": "spin 140s linear infinite reverse",
        marquee: "marquee 45s linear infinite",
        gradient: "gradient 12s ease infinite",
        ring: "ring 7s ease-out infinite",
      },
    },
  },
  plugins: [],
};
