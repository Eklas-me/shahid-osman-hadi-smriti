/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          crimson: '#e11d48', // The iconic red
          dark: '#020617',    // Deep navy/black
          void: '#000000',    // Pure black
          ash: '#9ca3af',     // Muted text
        }
      },
      fontFamily: {
        rebel: ['Oswald', 'sans-serif'],
        bengali: ['Hind Siliguri', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        hand: ['Permanent Marker', 'cursive'], // For protest signs
      },
      backgroundImage: {
        'noise': "url('/assets/noise.png')", // We will add a noise texture
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glitch: {
          '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
          '62%': { transform: 'translate(0,0) skew(5deg)' },
        }
      }
    },
  },
  plugins: [],
}
