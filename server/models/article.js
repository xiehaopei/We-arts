const mongoose = requrie('mongoose');

/**
 * @description: 文章模块
 * @param {aId} 文章id
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
  aId: Number,
  title: String,
  words: Number,
  content: String,
  describe: String,
  contentHtml: String,
  time: String,
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
  tags: String,
});

module.exports = mongoose.model('Article', Schema);
