/*
 * @Author: Haopei Xie
 * @Date: 2020-12-08 16:24:51
 * @LastEditTime: 2020-12-18 19:11:18
 * @LastEditors: Haopei Xie
 * @Description: User API
 * @FilePath: \We-arts\admin\src\api\user.js
 * @
 */
import axios from '../utils/http.js';
import base from './base.js';

const getLogin = (params) => {
  return axios.post(base.baseUrl + base.findUser, params);
}

const getUserList = () => {
  return axios.get(base.baseUrl + base.getUserList);
}

const addUser = (params) => {
  return axios.post(base.baseUrl + base.addUser, params);
}

const deleteUser = (id) => {
  return axios.post(base.baseUrl + base.deleteUser, { id });
}

const updateUser = (id, params) => {
  return axios.post(base.baseUrl + base.updateUser, { id , ...params})
}

export default { getLogin, getUserList, addUser, deleteUser, updateUser }