import en from '../locales/en.json'
import fr from '../locales/fr.json'
import de from '../locales/de.json'
import zh from '../locales/zh.json'
import ja from '../locales/ja.json'
import nl from '../locales/nl.json'

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'en-US',
  messages: {
    en,
    fr,
    de,
    zh,
    ja,
    nl,
  },
}))
