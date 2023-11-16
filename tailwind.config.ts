import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("tailwindcss-animate")],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "menu-open": {
          from: {
            "clip-path": "polygon(0 0, 100% 0, 100% 0, 0 0)",
            opacity: "0",
          },
          to: {
            "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            opacity: "1",
          },
        },
        "menu-close": {
          from: {
            "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          },
          to: {
            "clip-path": "polygon(0 0, 100% 0, 100% 0, 0 0)",
          },
        },
        "toast-show": {
          from: {
            top: "-10px",
          },
          to: {
            top: "16px",
          },
        },
        "container-enter": {
          from: {
            left: "-10px",
            opacity: "0",
          },
          to: {
            left: "0",
            opacity: "1",
          },
        },

        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: "translateX(-2px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(2px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "menu-open": "menu-open 0.3s ease-out forwards",
        "menu-close": "menu-close 0.3s ease-out forwards",
        "toast-show": "toast-show 0.3s ease-out forwards",
        "container-enter": "container-enter 0.3s ease-in forwards",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      colors: {
        darker: "rgb(18,18,18)",
        neonGreen: "#A6FF00",
      },
    },
  },
};
export default config;
