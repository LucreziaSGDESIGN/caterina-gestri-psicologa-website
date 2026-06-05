import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d9ff',
          300: '#a3bfff',
          400: '#7c9dff',
          500: '#5b7dff',
          600: '#4860f5',
          700: '#3b4ce1',
          800: '#313bc4',
          900: '#2c30a0',
        },
        accent: {
          50: '#fef8f0',
          100: '#fceee0',
          200: '#f8dcc0',
          300: '#f4c6a0',
          400: '#efaa7e',
          500: '#eb8e5c',
          600: '#d97a47',
          700: '#c66a3d',
          800: '#b35a33',
          900: '#9a4d2a',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#374151',
            a: {
              color: '#5b7dff',
              '&:hover': {
                color: '#4860f5',
              },
            },
            'h1,h2,h3,h4': {
              color: '#111827',
            },
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
