/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "libre-franklin": ['"Libre Franklin"', "sans-serif"], // Custom font family for Libre Franklin
        poppins: ["Poppins", "sans-serif"], // Custom font family for Poppins
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #7B6E62 0%, #50473E 100%)",
        "custom-gradient1": "linear-gradient(180deg, #7B6E62 0%, #B8A496 100%)",
        "custom-gradient2": "linear-gradient(180deg, #7B6E62 0%, #D5C0B2 100%)",
      },
    },
  },
  plugins: [],
};
