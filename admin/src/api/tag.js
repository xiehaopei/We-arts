/*
 * @Author: Haopei Xie
 * @Date: 2020-12-20 20:22:43
 * @LastEditTime: 2020-12-20 22:34:11
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

const deleteTag = (id) => {
  return axios.get(base.baseUrl + base.deleteTag + id)
}

const updateTag = (id, params) => {
  return axios.post(base.baseUrl + base.updateTag, { id, ...params })
}

export default { getTags, addTag, deleteTag, updateTag }