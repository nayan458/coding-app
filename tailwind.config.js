/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily : {
        'Inter' : 'Inter',
        'Ultra' : 'Ultra',
        'special-elite' : 'Special Elite',
        'SansPro' : ['Source Sans Pro', 'sans-serif'],
        'sketch' : 'Rubik Marker Hatch'
      },
      colors: {
        '00': '#FFFFFF',
        'charcol': '#1F2833',
        'ff': '#C5C6C7',
        'neo': {
          '200':'#66FCF1',
          '200':'#8b5cf6',
          '300':'#45A29E',
          '400' : '#10BAAE'
        },          
        'blk' : '#0B0C10',
        'orng' : {
          '100' : '#FF914D',
          '200' : '#F26E3F',
          '300' : '#F1514A',
          '400' : '#F03554'
        }
      },
      borderRadius: {
        'aa' : '37% 63% 29% 71% / 77% 18% 82% 23%',
        'ab' : '37% 63% 29% 71% / 77% 47% 53% 23%',
        'ac' : '79% 21% 38% 62% / 18% 47% 53% 82%',
        'ad' : '79% 21% 69% 31% / 25% 69% 31% 75%',
      },
      keyframes:{
        flow:{
          '0%' : {
              transform: 'rotate(0deg)',
              borderRadius : '37% 63% 29% 71% / 77% 18% 82% 23%',
              transform : 'translateY(-5%) translateX(0%)',
            },
            '33%' : {
              transform: 'rotate(180deg)',
              borderRadius : '37% 63% 29% 71% / 77% 47% 53% 23%',
              transform: 'translateY(55%) translateX(110%)',
            },
            '66%' : {
              transform: 'rotate(270deg)',
              borderRadius : '79% 21% 38% 62% / 18% 47% 53% 82%',
              transform: 'translateY(110%) translateX(55%)',
            },
            '100%' : {
              transform: 'rotate(360deg)',
              borderRadius : '37% 63% 29% 71% / 77% 18% 82% 23%',
              transform : 'translateY(-5%) translateX(0%)',
             },
        },
        flowOposit:{
          '0%' : {
            
            transform: 'rotate(0deg)',
            borderRadius : '37% 63% 29% 71% / 77% 47% 53% 23%',
            transform : 'translateY(55%) translateX(0%) scale(1)',
          },
          '33%' : {
            transform: 'rotate(270deg)',
            borderRadius : '79% 21% 38% 62% / 18% 47% 53% 82%',
            transform: 'translateY(110%) translateX(55%) scale(2)',

          },
          '66%' : {
            transform: 'rotate(0deg)',
            borderRadius : '37% 63% 29% 71% / 77% 18% 82% 23%',
            transform: 'translateY(0%) translateX(110%) scale(3)',
          },
          '100%' : {
            transform: 'rotate(0deg)',
            borderRadius : '37% 63% 29% 71% / 77% 47% 53% 23%',
            transform : 'translateY(55%) translateX(0%) scale(1)',
          },
        }
      },
      animation: {
        'anime' : 'flow 20s linear infinite',
        'anime-50' : 'flowOposit 40s linear infinite',
        'anime-100' : 'flow 70s linear infinite reverse',
        'anime-200' : 'flowOposit 70s linear infinite reverse',

      }
    },
  },
  plugins: [],
}
