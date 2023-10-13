/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      'xl': '1280px',
      '2xl': '1500px'
      
    },
    
    extend: {
      colors: {
        primary:{
          100:'#FF6363',
        },
        secondary:{
          100: '#E2ED25',
          200: '#888883',
          300:  '#ff3c38',
          400: '#556B2F',
          500: '#1019EF',
          600: '#2667ff',
          700: '#add7f6',
          800: '#1b3b6f'
        },
        mildgray: '#f4f5f4',
        info: '#fca311',
        deePblue: '#14213d',
        ash: '#e5e5e5',
        winered: '#b21118',
        blacktint:'#1A1A1A',
        blacktint2:'#333333',
      },
    height: {
      
        110: '28rem',
        120: '32rem',
        130: '36rem',
        140: '40rem',
      
    }, 
   
    
      container: {
        center:true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem'
        }
      }
    },
    fontFamily: {
      oswald: ['Oswald', 'sans-serif'],
      dmsans: ['DM Sans', 'sans-serif']
    }
  },
  plugins: [],
}
