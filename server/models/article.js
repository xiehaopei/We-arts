/*
 * @Author: Haopei Xie
 * @Date: 2020-11-27 23:26:19
 * @LastEditTime: 2020-12-26 22:30:21
 * @LastEditors: Haopei Xie
 * @Description: Article Model
 * @FilePath: \We-arts\server\models\article.js
 * @
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
/**
 * @description: 文章模块
 * @param _id 文章id
 * @param title 文章标题
 * @param content 文章内容
 * @param describe 文章描述
 * @param contentHtml 文章内容源码
 * @param time 时间
 * @param like 点赞数
 * @param read 阅读数
 * @param image 封面图
 * @param tags 标签
 * @param isPublic 是否发布
 * @return {*}
 */
const ArticleSchema = Schema({
  title: {
    type: String,
    require: true,
  },
  content: String,
  describe: { type: String, default: '' },
  contentHtml: String,
  time: {
    type: Date,
    default: Date.now
  },
  like: {
    type: Number,
    default: 0
  },
  read: {
    type: Number,
    default: 0
  },
  image: {
    path: {
      type: String,
      default: ''
    },
    filename: {
      type: String,
      default: ''
    }
  },
  tags: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    default: []
  },
  isPublic: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Article', ArticleSchema);
