/** @format */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e11d48",

          secondary: "#1c1917",

          accent: "#9ca3af",

          neutral: "#FFFFFF",

          "base-100": "#111827",

          info: "#3ABFF8",

          success: "#4ade80",

          warning: "#FBBD23",

          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
