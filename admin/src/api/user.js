/*
 * @Author: Haopei Xie
 * @Date: 2020-12-08 16:24:51
 * @LastEditTime: 2020-12-08 16:39:33
 * @LastEditors: Haopei Xie
 * @Description: User API
 * @FilePath: \We-arts\admin\src\api\user.js
 * @
 */
import axios from '../utils/http.js';
import base from './base.js';

const login = (params) => {
  axios.post(base.baseUrl + base.findUser, params);
}

const getUserList = () => {
  axios.get(base.baseUrl + base.getUserList);
}

const addUser = (params) => {
  axios.post(base.baseUrl + base.addUser, params);
}

const deleteUser = (id) => {
  axios.post(base.baseUrl + base.deleteUser, id);
}

const updateUser = (id, params) => {
  axios.post(base.baseUrl + base.updateUser, { id, params })
}

export default { login, getUserList, addUser, deleteUser, updateUser }