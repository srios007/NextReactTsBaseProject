/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Blue
        "dark-blue": "#0A2F5B",
        "medium-blue": "#3478D7",
        "pale-blue": "#D5E3F7",
        "light-blue": "#8EBDFF",
        "inactive-blue": "#0072CE",
        "subtitle-blue": "#5E7795",
        "background-card-blue": "#C8DEFC",
        "toggle-blue": "#0072CE",
        "info-blue": "#0072CE",
        "cian-blue": "#34C3D7",
        "calendar-blue": "#EDF5FF",

        // Green
        "light-green": "#CFFFF1",
        "main-green": "#5EE8C1",
        "alert-green": "#72D1B5",
        "homecenter-green": "#008A00",
        "dark-green": "#84B140",
        "green-icon": "#8BB64C",
        "green-alert": "#03DC9E",

        // Purple
        "dark-purple": "#5954D2",
        "helper-purple": "#5955D1",
        "balance-purple": "#9747FF",

        // Red
        "homecenter-red": "#DD0021",
        "finished-red": "#E85E5E",
        "button-red-hover": "#AC0111",
        "alert-red": "#F84B4B",
        "border-red": "#DE2B22",
        "reported-red": "#E86F6F",
        "light-red": "#FF845D",
        "dark-red": "#ED0022",

        //Gray
        "dark-gray": "#B3B7B8",
        "background-gray": "#F6F7F9",
        "medium-gray": "#F1F6FD",
        "homecenter-gray": "#7C8089",
        "gray-text": "#7C8089",
        "gray-title": "#595959",
        "gray-ligth": "#A9A9A9",
        "neutral-gray-cold": "#595959",

        //Yellow
        yellow: "#FCCD00",
        "alert-yellow": "#E5BE40",

        //Pink
        pink: "#ED88A6",

        //Orange
        "warning-light": "#FCF5CB",
        "warning-dark": "#866404",

        "text-dark": "#18181A",
      },

      boxShadow: {
        searchBar:
          "0px 2.804123640060425px 2.804123640060425px 0px rgba(0, 0, 0, 0.25);",
        imagesTable: "0px 4px 4px 0px rgba(0, 0, 0, 0.25);",
        accordion:
          "0px 2.412121295928955px 2.412121295928955px 0px rgba(0, 0, 0, 0.25);",
        inputAddClient: "0px 2px 4px 0px rgba(0, 0, 0, 0.25);",
        cardProductsHC: " 0px 0px 7px 0px rgba(0, 0, 0, 0.25);",
        fourPx: "0px 0px 4px 0px rgba(0, 0, 0, 0.25);",
        sixPx: "0px 0px 6px 0px rgba(0, 0, 0, 0.25);",
        inputShadow: "0px 2.3px 0px 0px rgba(0, 0, 0, 0.25);",
        radioShadow: "0px -1px 5px 0px rgba(10, 47, 91, 0.12);",
        photoShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25);",
        tableShadow: "0px -1px 5px 0px rgba(10, 47, 91, 0.12);",
        stateDiv: "0px 2px 4px 0px rgba(0, 0, 0, 0.25);",
        tagContainer: "0px 2.412px 2.412px 0px rgba(0, 0, 0, 0.25);",
      },
      gap: {
        formInventoryFieldsHorizontal: "10px",
        formInventoryFieldsHorizontalXL: "20px",
        formInventoryFieldsVertical: "8px",
        formInventoryFieldsVerticalXL: "16px",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        "3xl": "1800px",

        "4xl": "1920px",
      },
    },
  },
  plugins: [],
}

