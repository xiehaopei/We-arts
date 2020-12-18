/*
 * @Author: Haopei Xie
 * @Date: 2020-12-08 15:58:07
 * @LastEditTime: 2020-12-18 19:15:26
 * @LastEditors: Haopei Xie
 * @Description: API URL
 * @FilePath: \We-arts\admin\src\api\base.js
 * @
 */

const base = {
  baseUrl: 'http://localhost:3000',
  getUserList: '/user/getUserList',
  findUser: '/user/findUser',
  addUser: '/user/addUser',
  deleteUser: '/user/deleteUser',
  updateUser: '/user/updateUser',
  getArticleList:'/article/getArticleList',
  getArticleById:'/article/getArticle/',
  createArticle:'/article/createArticle',
  deleteArticleById:'/article/deleteArticle/',
  getArticleListByTag:'/article/getArticleListByTag/'
}

export default base;