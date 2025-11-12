/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Unica One"', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        abyss: '#040406',
        ember: '#f43f5e',
        aurora: '#22d3ee',
        toxic: '#a3e635',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        radar: 'conic-gradient(from 90deg, rgba(244,63,94,0.35), transparent 40%)',
      },
      animation: {
        pulseSlow: 'pulse 5s ease-in-out infinite',
        sonar: 'sonar 6s infinite',
      },
      keyframes: {
        sonar: {
          '0%': { transform: 'scale(0.5)', opacity: 0.5 },
          '70%': { transform: 'scale(1.6)', opacity: 0 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
