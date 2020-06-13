module.exports = {
  purge: [
    "./src/**/.js",
    "./src/**/*.md",
    "./src/**/*.vue",
    "./src/.vuepress/**/*.vue",
    "./dist/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        section: "#16161a",
        sectionAlt: "#242629",
        card: "#242629",
        cardAlt: "#16161a",
        heading: "#fffffe",
        accent: "#7f5af0",
        paragraph: "#94a1b2",
        alternative: "rgb(239, 187, 53)",
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    borderColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
};
