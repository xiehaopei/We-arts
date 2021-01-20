/*
 * @Author: Haopei Xie
 * @Date: 2020-11-30 20:54:10
 * @LastEditTime: 2021-01-20 23:39:03
 * @LastEditors: Haopei Xie
 * @Description: Tag Model
 * @FilePath: \We-arts\server\models\tag.js
 * @
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
/**
 * @description: 标签模块
 * @param {*}
 * @return {*}
 */
const TagSchema = Schema({
  tagName: { type: String, unique: true }
})

module.exports = mongoose.model('Tag', TagSchema);