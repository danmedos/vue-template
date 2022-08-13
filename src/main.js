import { createApp } from 'vue'
import App from './App.vue'
import AppLayout from '@/layouts/AppLayout.vue'
import store from '@/store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const init = async() => {
  const module = await import('./router');
  const router = await module.default;
  createApp(App)
    .use(router)
    .use(store)
    .use(ElementPlus)
    .component('AppLayout', AppLayout)
    .mount('#app')
}

init()