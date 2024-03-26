// vue i18n
import { createI18n } from 'vue-i18n'
// locale files
import en from '@/locale/en.json'
import de from '@/locale/de.json'
import fr from '@/locale/fr.json'

const instance = createI18n({
    fallbackLocale: 'en',
    locale: localStorage.getItem('locale') || 'en',
    messages: {
        en: en,
        de: de,
        fr: fr
    }
})

export default instance
export const i18n = instance.global