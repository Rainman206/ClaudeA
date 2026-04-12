/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Near-black base — not pure black, warmed with a trace of blue
        ink: {
          DEFAULT: '#0B0E10',
          900: '#0B0E10',
          800: '#13171A',
          700: '#1C2125',
          600: '#262C31',
          500: '#3A4248',
        },
        // Warm paper/bone for editorial type on dark
        bone: {
          DEFAULT: '#F2ECE0',
          100: '#FBF7EF',
          200: '#F2ECE0',
          300: '#E4DBC9',
          500: '#A89E88',
        },
        // Saturated teal accent — neon-meets-oxidized-copper
        teal: {
          DEFAULT: '#2BE4C6',
          300: '#7CF2DF',
          400: '#4FEBD0',
          500: '#2BE4C6',
          600: '#0FB79A',
          700: '#0A8674',
        },
        // Warm oxide — rust/neon peach reserved for small accents
        ember: '#FF6A3D',
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Oswald"', 'Impact', 'sans-serif'],
        serif: ['"Fraunces"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'Menlo', 'monospace'],
      },
      fontSize: {
        'mega': ['clamp(5rem, 18vw, 22rem)', { lineHeight: '0.82', letterSpacing: '-0.02em' }],
        'jumbo': ['clamp(3rem, 9vw, 8rem)', { lineHeight: '0.88', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        'hair': '0.24em',
      },
      boxShadow: {
        'slab': '0 24px 60px -24px rgba(11,14,16,0.85)',
        'neon': '0 0 0 1px rgba(43,228,198,0.45), 0 12px 48px -12px rgba(43,228,198,0.35)',
      },
      backgroundImage: {
        'grain': "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"240\" height=\"240\" viewBox=\"0 0 240 240\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"2\" stitchTiles=\"stitch\"/><feColorMatrix values=\"0 0 0 0 0.92  0 0 0 0 0.88  0 0 0 0 0.78  0 0 0 0.18 0\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\"/></svg>')",
      },
      animation: {
        'marquee': 'marquee 38s linear infinite',
        'marquee-slow': 'marquee 62s linear infinite',
        'flicker': 'flicker 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        flicker: {
          '0%,100%': { opacity: 1 },
          '42%': { opacity: 0.82 },
          '44%': { opacity: 1 },
          '78%': { opacity: 0.94 },
        },
      },
    },
  },
  plugins: [],
}
