import { ref } from 'vue'
import { defineStore } from 'pinia'

// vue i18n
import { i18n } from '@/locale'

export const useSettingsStore = defineStore('settings', () => {
    // locale
    const currentLocale = ref(i18n.locale)
    const availableLocales = i18n.availableLocales

    function changeLocale(newLocale) {
        if (!availableLocales.includes(newLocale)) {
            console.error(
                `Locale "${newLocale}" not found. Using fallback locale "${i18n.fallbackLocale}".`
            )
            newLocale = i18n.fallbackLocale
        }

        i18n.locale = newLocale
        currentLocale.value = newLocale
        localStorage.setItem('locale', newLocale)
    }

    // country
    const availableCountries = ['us', 'uk', 'de', 'fr', 'ie', 'ca', 'au', 'nz']
    const fallbackCountry = 'us'
    const currentCountry = ref(localStorage.getItem('country') || fallbackCountry)

    function changeCountry(newCountry) {
        if (!availableCountries.includes(newCountry)) {
            console.error(
                `Country "${newCountry}" not found. Using fallback country "${fallbackCountry}".`
            )
            newCountry = fallbackCountry
        }

        currentCountry.value = newCountry
        localStorage.setItem('country', newCountry)
    }

    // currency
    const availableCurrencies = ['usd', 'gbp', 'eur', 'cad', 'aud', 'nzd']
    const fallbackCurrency = 'usd'
    const currentCurrency = ref(localStorage.getItem('currency') || fallbackCurrency)

    function changeCurrency(newCurrency) {
        if (!availableCurrencies.includes(newCurrency)) {
            console.error(
                `Currency "${newCurrency}" not found. Using fallback currency "${fallbackCurrency}".`
            )
            newCurrency = fallbackCurrency
        }

        currentCurrency.value = newCurrency
        localStorage.setItem('currency', newCurrency)
    }

    return {
        // locale
        currentLocale,
        availableLocales,
        changeLocale,
        // country
        availableCountries,
        currentCountry,
        changeCountry,
        // currency
        availableCurrencies,
        currentCurrency,
        changeCurrency
    }
})
