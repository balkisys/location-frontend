import theme from './src/styles/theme'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: theme.colors,
      fontFamily: theme.fontFamily,
      spacing: theme.spacing,
      lineHeight: theme.typography.lineHeight,
      letterSpacing: theme.typography.letterSpacing,
      textAlign: theme.typography.textAlign,
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config