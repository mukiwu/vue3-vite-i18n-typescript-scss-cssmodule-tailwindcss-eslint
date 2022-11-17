import { createApp } from 'vue'
import './assets/styles/style.css'
import i18n from './plugins/i18n'
import App from './App.vue'

createApp(App).use(i18n).mount('#app')
