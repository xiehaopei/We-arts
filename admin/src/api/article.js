/*
 * @Author: Haopei Xie
 * @Date: 2020-12-18 16:37:55
 * @LastEditTime: 2020-12-18 20:29:05
 * @LastEditors: Haopei Xie
 * @Description: Article API
 * @FilePath: \We-arts\admin\src\api\article.js
 * @
 */
import axios from '../utils/http.js';
import base from './base.js';

const getArticleList = () => {
  return axios.get(base.baseUrl + base.getArticleList)
}

const getArticleById = (id) => {
  return axios.get(base.baseUrl + base.getArticleById + id)
}

const createArticle = (params) => {
  return axios.post(base.baseUrl + base.createArticle, params)
}

const deleteArticleById = (id) => {
  return axios.get(base.baseUrl + base.deleteArticleById + id)
}

const getArticleListByTag = (tags) => {
  return axios.get(base.baseUrl + base.getArticleListByTag + tags)
}

export default { getArticleList, getArticleById, createArticle, deleteArticleById, getArticleListByTag }