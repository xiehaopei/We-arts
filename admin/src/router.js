/*
 * @Author: Haopei Xie
 * @Date: 2020-12-03 22:12:16
 * @LastEditTime: 2020-12-03 23:11:54
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
    { path: '/', redirect: '/index' },
    {
      path: '/index', component: () => import('./pages/Index.vue'), children: [
        { path: '/article', component: () => import('./pages/article/Article.vue') }
      ]
    },
    { path: '/login', component: () => import('./pages/Login.vue') }
  ]
})

export default router;