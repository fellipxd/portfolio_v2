module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        max: "max-content",
        half: "90vh",
        quart: "65vh",
        view: "58%"
      },

      colors: {
        mantis: {
          DEFAULT: "#414189",
          50: "#1E1E1E",
          100: "#BCB4a1",
          150: "#262655"

        },
      },

      borderRadius: {
        circle: "150%",

      }

    },
  },
  plugins: [],
}
