module.exports = {
  mode: "jit",
  content: ["./**/*.liquid"],
  theme: {
    extend: {
      colors: {
        accent: "#8de971",
        dark: "#181818",
        yellow: "#FEFF67",
      },
      fontFamily: {
        Akkurat: ["Akkurat"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
