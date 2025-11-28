/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC', // Very light neutral
        surface: '#FFFFFF',
        muted: '#F1F5F9',
        primary: '#0F172A',
        secondary: '#64748B',
        accent: {
          teal: '#7DD3FC',   // Accent 1
          violet: '#C7B3FF', // Accent 2
          peach: '#FFD6B5',  // Accent 3
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}