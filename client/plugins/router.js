export default ({ app: { router } }) => {
  // 顶部loading
  router.afterEach((to, from) => {
    setTimeout(() => {
      document.querySelector('.loader').style.display = 'none'
    }, 800)
  })
  router.beforeEach((to, from, next) => {
    document.querySelector('.loader').style.display = 'block'
    next()
  })
}
