module.exports = {
  mode: "jit",
  content: ["./**/*.liquid"],
  theme: {
    extend: {
      colors: {
        accent: "#00bcd4",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
