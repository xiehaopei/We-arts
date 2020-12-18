/*
 * @Author: Haopei Xie
 * @Date: 2020-11-30 20:54:10
 * @LastEditTime: 2020-12-18 21:39:34
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
  tagName: String,
  bgColor: String
})

module.exports = mongoose.model('Tag', Tag)