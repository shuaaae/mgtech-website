/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-cyan-50": "#00e5ff",
        "color-white-solid": "#fff",
        "color-black-solid": "#000",
        "color-spring-green-52": "#1ee9b6",
        "selasa-cyan-aqua": "#00e5ff",
      },
      spacing: {
        "item-spacing-96": "96px",
        "width-800": "800px",
        "item-spacing-0-01": "0.01px",
        "item-spacing-0-68": "-0.68px",
        "item-spacing-19-19": "19.19px",
        "item-spacing-462-36": "462.36px",
        "item-spacing-14-36": "14.36px",
        "item-spacing-10": "10px",
        "item-spacing-9-99": "9.99px",
        "item-spacing-10-01": "10.01px",
      },
      fontFamily: {
        "font-family-font-1": "Inter",
      },
      borderWidth: {
        "stroke-weight-1": "1px",
      },
      opacity: {
        "opacity-30": "0.3",
        "opacity-36": "0.36",
      },
    },
    fontWeight: {
      "font-weight-400": "400",
    },
    lineHeight: {
      "line-height-75": "75px",
      "line-height-55": "55px",
      "line-height-36-4": "36.4px",
      "line-height-50": "50px",
      "line-height-47-6": "47.6px",
      "line-height-20": "20px",
    },
    letterSpacing: {
      "stroke-weight-1": "1px",
    },
    screens: {},
  },
  corePlugins: {
    preflight: false,
  },
};
