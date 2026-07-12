import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        panel: {
          cream: "#f2e0b8",
          cream2: "#e8cf98",
          border: "#6b4a24",
          borderDark: "#4a3117",
          ink: "#4a3417",
        },
        farm: {
          green: "#6ba63a",
          greenDark: "#4a7c2f",
          greenBtn: "#7bbf3a",
          greenBtnDark: "#4e8a24",
          gold: "#f6c445",
          goldDark: "#d99a1e",
          coin: "#ffd23f",
          gem: "#3ddc84",
          energy: "#7fdd52",
          wood: "#241a10",
          woodTop: "#2c2013",
        },
      },
      fontFamily: {
        vazir: ["Vazirmatn", "Tahoma", "sans-serif"],
      },
      boxShadow: {
        panel: "0 4px 0 0 rgba(0,0,0,0.35), inset 0 1px 0 0 rgba(255,255,255,0.25)",
        btn: "0 3px 0 0 rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
