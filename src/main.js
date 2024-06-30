import './assets/main.css'
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
