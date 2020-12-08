/*
 * @Author: Haopei Xie
 * @Date: 2020-12-08 15:58:07
 * @LastEditTime: 2020-12-08 16:25:09
 * @LastEditors: Haopei Xie
 * @Description: API URL
 * @FilePath: \We-arts\admin\src\api\base.js
 * @
 */

const base = {
  baseUrl: 'http://127.0.0.1:3000',
  getUserList: '/user/getUserList',
  findUser: '/user/findUser',
  addUser: '/user/addUser',
  deleteUser: '/user/deleteUser',
  updateUser: '/user/updateUser',
}

export default base;