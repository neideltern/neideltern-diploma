import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', () => {
    // country
    const availableCountries = ['US', 'UK', 'DE', 'FR', 'IE', 'CA', 'AU', 'NZ']
    const country = ref(localStorage.getItem('country') || 'US')

    function changeCountry(newCountry) {
        country.value = newCountry
        localStorage.setItem('country', newCountry)
    }

    // language
    const availableLocales = ['EN', 'DE', 'FR']
    const locale = ref(localStorage.getItem('locale') || 'EN')

    function changeLocale(newLocale) {
        locale.value = newLocale
        localStorage.setItem('locale', newLocale)
    }

    // currency
    const availableCurrencies = ['USD', 'GBP', 'EUR', 'CAD', 'AUD', 'NZD']
    const currency = ref(localStorage.getItem('currency') || 'USD')

    function changeCurrency(newCurrency) {
        currency.value = newCurrency
        localStorage.setItem('currency', newCurrency)
    }

    // return
    return {
        // country
        availableCountries,
        country,
        changeCountry,
        // languages
        availableLocales,
        locale,
        changeLocale,
        // currency
        availableCurrencies,
        currency,
        changeCurrency
    }
})
