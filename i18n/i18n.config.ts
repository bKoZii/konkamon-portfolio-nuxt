import en from '~/i18n/locales/en.json'
import th from '~/i18n/locales/th.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'th',
  fallbackLocale: 'en',
  messages: {
    en,
    th,
  },
}))
