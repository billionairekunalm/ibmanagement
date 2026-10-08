/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dicom: {
          black: '#f0f4f8',      // Soft clinical sky-blue background
          darker: '#ffffff',     // Pure white for card containers and forms
          dark: '#ffffff',       // Pure white secondary backgrounds
          gray: '#e1eef9',       // Soft active blue pill highlight
          muted: '#cbd5e1',      // Slate-300 borders
          border: '#e2e8f0',     // Slate-200 borders
          textMuted: '#64748b',  // Slate-500 muted body text
          bone: '#0f2e4a',       // Deep navy blue headings & brand text
          boneDark: '#1e293b',   // Slate-800 primary body text
        },
        accent: {
          amber: '#0066cc',      // Primary diagnostic medical blue for buttons/CTAs
          amberDark: '#0052a3',  // Darker blue for button hovers
          amberLight: '#e1eef9', // Light blue background for stats/cards
          warning: '#d97706',    // Dark amber/orange for alerts & elapsed TAT indicators
          completed: '#00a884',  // Emerald green for signed/completed status
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Outfit"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 12px rgba(15, 46, 74, 0.04), 0 8px 30px rgba(15, 46, 74, 0.02)',
        medium: '0 4px 20px rgba(15, 46, 74, 0.06), 0 10px 40px rgba(15, 46, 74, 0.04)',
      }
    },
  },
  plugins: [],
}
