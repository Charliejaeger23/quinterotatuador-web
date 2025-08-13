import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { red: "#7A0F0F", dark: "#0B0B0B" }
      },
      boxShadow: {
        card: "0 12px 40px -12px rgba(0,0,0,.45)"
      },
      maxWidth: { wrapper: "1200px" }
    },
  },
  plugins: [],
};
export default config;
