import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/app/router'
import PrimeVue from 'primevue/config'

import '@/app/styles/main.css'
import 'primeicons/primeicons.css'
import Slider from 'primevue/slider'

const app = createApp(App)
app.component('Slider', Slider)
app.use(router)
app.use(PrimeVue, {
  unstyled: true,
})
app.mount('#app')

//написать контентные секции
//яндекс порешать
