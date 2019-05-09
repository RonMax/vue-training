export default (app) => {
  app.router.beforeEach((to, from, next) => {
    /* must call `next` */
    next()
  })
  app.router.beforeResolve((to, from, next) => {
    /* must call `next` */
    next()
  })
  app.router.afterEach((to, from) => {
  })
  app.router.push()
  app.router.replace()
  app.router.go()
  app.router.back()
  app.router.forward()
}
