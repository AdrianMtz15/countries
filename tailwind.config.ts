import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark-elements': 'hsl(209, 23%, 22%)',
        'dark-background': 'hsl(207, 26%, 17%)',
        'dark-text': 'hsl(0, 0%, 100%)',
        'light-elements': 'hsl(0, 0%, 100%)',
        'light-background': 'hsl(0, 0%, 98%)',
        'light-text': 'hsl(200, 15%, 8%)',
        'ligth-input': 'hsl(0, 0%, 52%)'

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [nextui()],
}
export default config
