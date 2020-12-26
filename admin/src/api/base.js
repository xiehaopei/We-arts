/*
 * @Author: Haopei Xie
 * @Date: 2020-12-08 15:58:07
 * @LastEditTime: 2020-12-26 01:19:18
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
  deleteTagById: '/tag/deleteTagById/',
  updateTag: '/tag/updateTag'
}

export default base;