import en from './lang/en.json'
import th from './lang/th.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'th',
  fallbackLocale: 'en',
  messages: {
    en,
    th,
  },
}))
