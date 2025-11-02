/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        trustblue: {
          0: '#ffffff',
          150: '#bed0f9',
          200: '#a8c1f7',
          350: '#2563eb',
          900: '#040a18',
        },
        opengreen: {
          250: '#6bd5b1',
          300: '#3dc799',
          400: '#0d9467',
          600: '#064a34',
        },
        preserved: {
          light: '#eac297',
          dark: '#9f6424',
        },
        background: {
          light: '#f1f1f1',
          dark: '#111116',
        },
        sidebar: {
          light: '#e2e2e2',
          dark: '#29292d',
        },
        border: {
          light: '#dadada',
          dark: 'rgba(255, 255, 255, 0.1)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-instrument-serif)', 'Georgia', 'serif'],
      },
      maxWidth: {
        'content': '1728px', // MacBook Pro 16" width
      },
    },
  },
  plugins: [],
}
