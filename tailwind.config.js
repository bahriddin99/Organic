/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // container:{
      //   center: "1200px",
      //   // padding:"120px",
      //  },
    colors:{
      texts:"#274C5B",
      input_bg: "#FAFAFA",
      search_bg: "#7EB693",
      borders: "#E0E0E0",
      lorem: "#525C60",
      home: "#E3F1E9",
      bg_secondary: "#EFD372",
      natural: "#68A47F",
      about_us: "#F9F8F8",
      vector: "#335B6B",
      border: "#7EB693"


    },
    fontFamily:{
      "yellowtail":"Yellowtail",
      "Roboto":"Roboto"
        
      
    }
   
    
      
    },
  },
  plugins: [],
}