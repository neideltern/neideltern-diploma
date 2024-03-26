// vue app
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// styles
import '../src/assets/stylus/main.styl'

// router
import router from './router'
app.use(router)

// pinia
import { createPinia } from 'pinia'
app.use(createPinia())

// localization
import i18nInstance from '@/locale'
app.use(i18nInstance)

// mount app
app.mount('#app')
