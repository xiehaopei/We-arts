/*
 * @Author: Haopei Xie
 * @Date: 2020-12-08 15:58:07
 * @LastEditTime: 2021-01-21 23:54:21
 * @LastEditors: Haopei Xie
 * @Description: API URL
 * @FilePath: \We-arts\admin\src\api\base.js
 * @
 */

const base = {
  baseUrl: 'http://localhost:3000',
  /* User API */
  getUserList: '/user/getUserList',
  findUser: '/user/findUser',
  addUser: '/user/addUser',
  deleteUser: '/user/deleteUser',
  updateUser: '/user/updateUser',
  /* Article API */
  getArticleList: '/article/getArticleList',
  getArticleById: '/article/getArticle/',
  createArticle: '/article/createArticle',
  deleteArticleById: '/article/deleteArticle/',
  getArticleListByTag: '/article/getArticleListByTag/',
  fileUpload: '/article/fileUpload',
  /* Tag API */
  getTags: '/tag/getTags',
  addTag: '/tag/addTag',
  deleteTag: '/tag/deleteTag',
  updateTag: '/tag/updateTag'
}

export default base;