/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'jet-black':       '#202a25',
        'violet-twilight': '#5f4bb6',
        'wisteria-blue':   '#86a5d9',
        'neon-ice':        '#26f0f1',
        'tea-green':       '#c4ebc8',
        ink: {
          950: '#161d19',
          900: '#202a25',
          850: '#283330',
          800: '#313d38',
          700: '#3d4d46',
          600: '#4f6258',
          500: '#6b8076',
          400: '#8aa092',
          300: '#a8baad',
          200: '#c8d4cb',
          100: '#e3eae5',
          50:  '#f1f4f2',
        },
        warning: '#f5b860',
        danger:  '#ef6a6a',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', '"SF Mono"', 'Menlo', 'monospace'],
      },
      borderRadius: {
        r1: '4px',
        r2: '6px',
        r3: '8px',
        r4: '10px',
        r5: '12px',
        r6: '16px',
      },
      spacing: {
        13: '52px',
        15: '60px',
        18: '72px',
      },
    },
  },
  plugins: [],
}
