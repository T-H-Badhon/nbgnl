import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: { center: true, padding: "2rem" },
    extend: {
      colors: {
        bodyBg: "var(--bodyBg)",
        navButtonFocus: "var(--navButtonFocus)",
        primaryText: "var(--primaryText)",
        secondaryText: "var(--secondaryText)",
        primaryHover: "var(--primaryHover)",
        secondaryHover: "var(--secondaryHover)",
      },
    },
  },
  plugins: [],
};
export default config;
