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
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
