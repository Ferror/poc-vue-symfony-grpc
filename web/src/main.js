import { createApp } from 'vue'
import App from '@/App.vue'
import Client from '@/client/product.js'

Client.create()

createApp(App).mount('#app')
