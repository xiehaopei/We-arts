/*
 * @Author: Haopei Xie
 * @Date: 2020-11-27 23:26:19
 * @LastEditTime: 2020-11-30 20:57:46
 * @LastEditors: Haopei Xie
 * @Description: Article Model
 * @FilePath: \We-arts\server\models\article.js
 * @
 */
const mongoose = require('mongoose');

/**
 * @description: 文章模块
 * @param {_id} 文章id
 * @param {title} 文章标题
 * @param {words} 文章字数
 * @param {content} 文章内容
 * @param {describe} 文章描述
 * @param {contentHtml} 文章内容源码
 * @param {time} 时间
 * @param {like} 点赞数
 * @param {read} 阅读数
 * @param {image} 封面图
 * @param {tags} 标签
 * @return {*}
 */
const Schema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  words: Number,
  content: String,
  describe: String,
  contentHtml: String,
  time: Date,
  like: {
    type: Number,
    default: 0
  },
  read: {
    type: Number,
    default: 0
  },
  image: {
    url: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  tags: {
    type: [String],
    default: []
  },
});

module.exports = mongoose.model('Article', Schema);
