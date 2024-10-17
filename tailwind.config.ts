import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  css: ['~/assets/main.css'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'transparent': 'transparent',
        'current': 'currentColor',
        'ocean-green': {
          DEFAULT: '#379777',
          50: '#C8EBE0',
          100: '#B6E4D5',
          200: '#90D7BF',
          300: '#6BC9AA',
          400: '#46BB94',
          500: '#379777',
          600: '#2C795F',
          700: '#215B48',
          800: '#163D30',
          900: '#0B1F19',
          950: '#06100D',
        },
        'secondary': {
          DEFAULT: '#344C64',
          light: '#577B8D',
        },
      },
      fontFamily: {
        sans: ['Albert Sans', 'Noto Sans Thai Looped', 'system-ui'],
        mono: ['Fira Code', 'Noto Sans Thai Looped'],
      },
    },
  },
}
