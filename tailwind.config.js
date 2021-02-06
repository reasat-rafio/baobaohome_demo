module.exports = {
   purge: {
      enable: true,
      content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
   },
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         colors: {
            "royal-blue": "#393d72",
            "text-color": "#88888B",
         },
      },
      screens: {
         sm: "640px",

         md: "768px",

         lg: "1024px",

         xl: "1280px",

         "2xl": "1536px",
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
