import { createApp } from 'vue'
import App from './App.vue'
import AppLayout from './layouts/AppLayout'

const init = async() => {
  const module = await import('./router');
  const router = await module.default;
  createApp(App)
    .use(router)
    .component('AppLayout', AppLayout)
    .mount('#app')
}

init()