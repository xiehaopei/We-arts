/*
 * @Author: Haopei Xie
 * @Date: 2020-11-30 20:54:10
 * @LastEditTime: 2020-12-21 10:49:17
 * @LastEditors: Haopei Xie
 * @Description: Tag Model
 * @FilePath: \We-arts\server\models\tag.js
 * @
 */
const mongoose = require('mongoose');

/**
 * @description: 标签模块
 * @param {*}
 * @return {*}
 */
const Schema = new mongoose.Schema({
  tagName: { type: String, unique: true },
  bgColor: { type: String, default: '#fff' },
  color: { type: String, default: '#000' }
})

module.exports = mongoose.model('Tag', Schema);