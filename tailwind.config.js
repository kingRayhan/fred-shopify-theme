module.exports = {
  mode: "jit",
  content: ["./**/*.liquid"],
  theme: {
    extend: {
      colors: {
        accent: "var(--color_accent)",
        dark: "var(--color_body_text)",
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
