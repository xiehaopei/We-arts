/*
 * @Author: Haopei Xie
 * @Date: 2020-12-03 22:12:16
 * @LastEditTime: 2020-12-21 12:31:02
 * @LastEditors: Haopei Xie
 * @Description: 路由管理
 * @FilePath: \We-arts\admin\src\router.js
 * @
 */

import { createRouter, createWebHistory } from 'vue-router'

const history = createWebHistory();

const router = createRouter({
  history,
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: '/index', component: () => import('./pages/Index.vue'), children: [
        { path: "/", redirect: '/monitor' },
        { path: '/monitor', component: () => import('./pages/Monitor.vue') },
        { path: '/article', component: () => import('./pages/article/Article.vue') },
        { path: '/details', component: () => import('./pages/article/Details.vue') },
        { path: '/user', component: () => import('./pages/user/User.vue') },
        { path: '/tag', component: () => import('./pages/tags/Tag.vue') }
      ]
    },
    { path: '/login', component: () => import('./pages/Login.vue') },
    { path: '/404', component: () => import('./pages/404.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/404' }
  ]
})

router.beforeEach((to, from) => {
  if(to.path==='/index'){
    router.replace('/monitor')
  }
  console.log(to, from)
})

export default router;