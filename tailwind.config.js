module.exports = {
  mode: "jit",
  content: ["./**/*.liquid"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
