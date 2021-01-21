/*
 * @Author: Haopei Xie
 * @Date: 2020-12-20 20:22:43
 * @LastEditTime: 2021-01-22 01:04:54
 * @LastEditors: Haopei Xie
 * @Description: Tag API
 * @FilePath: \We-arts\admin\src\api\tag.js
 * @
 */
import axios from '../utils/http.js';
import base from './base.js';

const getTags = () => {
  return axios.get(base.baseUrl + base.getTags)
}

const addTag = (params) => {
  return axios.post(base.baseUrl + base.addTag, params)
}

const deleteTag = (params) => {
  return axios.post(base.baseUrl + base.deleteTag, params)
}

const updateTag = (id, params) => {
  return axios.post(base.baseUrl + base.updateTag, { id, ...params })
}

export default { getTags, addTag, deleteTag, updateTag }