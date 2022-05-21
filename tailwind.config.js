module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#edbc40",
          secondary: "#e6bbf7",
          accent: "#9cbee5",
          neutral: "#23242F",
          "base-100": "#E8E7EE",
          info: "#83CDE7",
          success: "#28BD7F",
          warning: "#F9B566",
          error: "#EB6C66",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
