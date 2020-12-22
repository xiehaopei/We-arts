/*
 * @Author: Haopei Xie
 * @Date: 2020-12-05 16:54:06
 * @LastEditTime: 2020-12-22 20:42:21
 * @LastEditors: Haopei Xie
 * @Description: User Model
 * @FilePath: \We-arts\server\models\user.js
 * @
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
/**
 * @description: 用户模块
 * @param username 用户名
 * @param password 密码
 * @param authority 操作权限
 * @return {*}
 */
const UserSchema = Schema({
  username: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
    min: 3,
    max: 16
  },
  authority: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('User', UserSchema)