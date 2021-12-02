import en from './en.json'
import ru from './ru.json'

const langs = {
  en,
  ru,
}

const getLocale = (lang) => langs[lang];
const getContent = (lang, content) => getLocale(lang)[content];

export { getLocale, getContent };
