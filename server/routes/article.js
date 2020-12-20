/*
 * @Author: Haopei Xie
 * @Date: 2020-11-26 16:26:26
 * @LastEditTime: 2020-12-20 20:26:17
 * @LastEditors: Haopei Xie
 * @Description: 文章模块路由
 * @FilePath: \We-arts\server\routes\article.js
 * @
 */
const express = require('express');
const router = express.Router();
const controller = require('../controllers/articleController');

router.get('/getArticleList', controller.getArticleList);
router.get('/getArticle/:id', controller.getArticleById);
router.post('/createArticle', controller.createArticle);
router.get('/deleteArticle/:id', controller.deleteArticleById);
router.get('/getArticleListByTag', controller.getArticleListByTag);

module.exports = router;