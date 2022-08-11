import { createApp } from 'vue'
import App from './App.vue'
import AppLayout from '@/layouts/AppLayout'
import store from '@/store'

const init = async() => {
  const module = await import('./router');
  const router = await module.default;
  createApp(App)
    .use(router)
    .use(store)
    .component('AppLayout', AppLayout)
    .mount('#app')
}

init()