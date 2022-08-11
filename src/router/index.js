import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import store from '@/store'

export default Promise.all(routes).then(routes => {
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

  router.beforeEach((to, from, next) => {
    if (!to.meta.middlewares) {
      return next()
    }
    const middlewares = to.meta.middlewares
    Object.keys(middlewares).forEach(middleware => {
      middlewares[middleware]({ to, from, next, store })
    })
    return next()
  })

  return router
})