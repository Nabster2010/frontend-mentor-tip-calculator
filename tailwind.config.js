module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        strongCyan: "hsl(172, 67%, 45%)",
        hoverCyan: "hsl(172, 67%, 70%)",
        veryDarkCyan: "hsl(183, 100%, 15%)",
        disableDark: "hsl(183, 100%, 25%)",
        darkGrayishCyan: "hsl(186, 14%, 43%)",
        grayishCyan: "hsl(184, 14%, 56%)",
        lightGrayishCyan: "hsl(185, 41%, 84%)",
        VeryLightGrayishCyan: "hsl(189, 41%, 97%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        spaceMono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
