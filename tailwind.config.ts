import type { Config } from 'tailwindcss'
import tailwindTypography from '@tailwindcss/typography'
export default {
  content: [

  ],
  css: ['~/assets/main.css'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          DEFAULT: '#006769',
          dark: '#043c3d',
          light: '#029496'
        },
        secondary: {
          DEFAULT: '#344C64',
          light: '#577B8D'
        }
      },
    },
    fontFamily: {
      'sans': ['Outfit', 'Noto Sans Thai Looped', 'system-ui'],
    }
  },
  plugins: [tailwindTypography],
} satisfies Config

