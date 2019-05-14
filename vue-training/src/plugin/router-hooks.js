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
  const Id = '123'
  app.router.push({name: 'home', params: { Id: '123' }})
  app.router.push({name: 'home', params: { Id }})
  // 帶查詢參數，/home?Id=123
  app.router.push({path: 'home', query: { Id: '123' }})
  // 直接替換當前history紀錄
  app.router.replace()
  // router控制瀏覽器向前或向後（原本history.go & history.back用法）
  app.router.go(-1)
  app.router.back()
  app.router.forward()
}
