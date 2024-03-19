// vue app
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// router
import router from './router'
app.use(router)

// pinia
import { createPinia } from 'pinia'
app.use(createPinia())

// localization
import { createI18n } from 'vue-i18n'
import { watchEffect } from 'vue'
import { useSettingsStore } from '@/stores/settings'

import EN from '@/locale/en.json'
import DE from '@/locale/de.json'
import FR from '@/locale/fr.json'

const settings = useSettingsStore()
const i18n = createI18n({
    locale: settings.locale,
    messages: {
        EN: EN,
        DE: DE,
        FR: FR
    }
})

watchEffect(() => {
    i18n.global.locale = settings.locale
})

app.use(i18n)

// mount app
app.mount('#app')
