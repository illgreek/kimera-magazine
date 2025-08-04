/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
        'avant-garde': ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
        'serif': ['Georgia', 'serif'],
      },
      colors: {
        'avant-black': '#000000',
        'avant-white': '#FFFFFF',
        'avant-gray': '#1A1A1A',
        'avant-light-gray': '#333333',
        'avant-dark-gray': '#0A0A0A',
      },
      animation: {
        'parallax': 'parallax 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        parallax: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-100px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 255, 255, 0.8)' },
        },
      },
    },
  },
  plugins: [],
} 