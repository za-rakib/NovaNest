/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EE3333",
        secondary: "#808080",
        gray2: "#7C7C7C",
        grey: "#242424",
        blue: "#3B82F6",
        button_bg: "#2A2A2A",
        charcoal: "#374151",
        "eerie-black": "#1F1F1F",
        "eerie-black2": "#191919",
        "eerie-black3": "#1C1C1C",
        "chinese-black": "#121212",
        "silver-sand": "#C4C4C4",
        "charleston-green": "#2A2A2A",
        "spanish-gray": "#979797",
        "spanish-green": "#118C4F",
        "quick-silver": "#A1A1A1",
        "quick-silver2": "#A3A3A3",
        "chinese-silver": "#CCCCCC",
        "light-gray": "#D2D2D2",
        azure: "#0078FF",
        emerald: "#4ECB71",
        "cyber-yellow": "#FED303",
        "outer-space": "#484848",
        violets: "#7B61FF",
        "maximum-blue": " #48B5D6",
        "fire-engine-red": "#D21E28",
        "dark-gunmetal": "#1D2129",
        "vampire-black": "#0B0B0B",
        "granite-gray": "#636363",
      },
      lineHeight: {
        11: "2.75rem",
      },
      height: {
        13: "52",
      },
      width: {
        "1/7": "14.2857143%",
      },
      zIndex: {
        1000: "1000",
      },
    },
  },
  plugins: [],
};
