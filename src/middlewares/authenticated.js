export default function ({ next, store }) {
  if (!store || !store.getters.isAuthenticated) next({ path: '/login' })
  else next()
}