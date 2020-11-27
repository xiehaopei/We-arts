/*
 * @Author: Haopei Xie
 * @Date: 2020-11-26 16:26:26
 * @LastEditTime: 2020-11-27 20:52:42
 * @LastEditors: Haopei Xie
 * @Description: 文章模块路由
 * @FilePath: \We-arts\server\routes\article.js
 * @
 */
const express = require('express');
const router = express.Router();
const controller = require('../controllers/articleController');

router.get('/', (req, res) => {
  res.status(200).send('get article')
})
router.get('/getArticleList', controller.getArticleList);
router.get('/getArticle/:id', controller.getArticleById);
router.post('/createArticle', controller.createArticle);
router.get('/deleteArticle/:id', controller.deleteArticleById);

module.exports = router;