/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      colors: {
        primary: '#1e3a8a',
        secondary: '#0f172a',
        accent: '#3b82f6',
        dark: '#0f0f23',
        glass: 'rgba(255, 255, 255, 0.1)',
      },


      animation: {

        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        bounceSlow: 'bounce 2s infinite',
        pulseSlow: 'pulse 3s infinite',
        spinSlow: 'spin 20s linear infinite',

        /* orbit animations */

        orbit1: 'orbit1 18s linear infinite',
        orbit2: 'orbit2 18s linear infinite',
        orbit3: 'orbit3 18s linear infinite',

      },


      keyframes: {

        float: {
          '0%,100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-20px)'
          },
        },


        glow: {
          '0%': {
            boxShadow: '0 0 20px rgba(59,130,246,0.3)'
          },
          '100%': {
            boxShadow: '0 0 40px rgba(59,130,246,0.6)'
          }
        },


        /* orbit animation 1 */

        orbit1: {
          '0%': {
            transform: 'rotate(0deg) translateX(180px) rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg) translateX(180px) rotate(-360deg)'
          }
        },


        /* orbit animation 2 */

        orbit2: {
          '0%': {
            transform: 'rotate(120deg) translateX(180px) rotate(-120deg)'
          },
          '100%': {
            transform: 'rotate(480deg) translateX(180px) rotate(-480deg)'
          }
        },


        /* orbit animation 3 */

        orbit3: {
          '0%': {
            transform: 'rotate(240deg) translateX(180px) rotate(-240deg)'
          },
          '100%': {
            transform: 'rotate(600deg) translateX(180px) rotate(-600deg)'
          }
        },

      }

    },
  },

  plugins: [require('@tailwindcss/typography')],
}