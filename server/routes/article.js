/*
 * @Author: Haopei Xie
 * @Date: 2020-11-26 16:26:26
 * @LastEditTime: 2021-01-21 22:28:39
 * @LastEditors: Haopei Xie
 * @Description: 文章模块路由
 * @FilePath: \We-arts\server\routes\article.js
 * @
 */
const express = require('express');
const router = express.Router();
const controller = require('../controllers/articleController');
const path = require('path');
const multer = require('multer');
const upload = multer({ dest: path.join(__dirname, '../public/upload') });

router.get('/getArticleList', controller.getArticleList);
router.get('/getArticle/:id', controller.getArticleById);
router.post('/createArticle', controller.createArticle);
router.get('/deleteArticle/:id', controller.deleteArticleById);
router.get('/getArticleListByTag/:id', controller.getArticleListByTag);
router.post('/fileUpload', upload.single('file'), controller.fileUpload);

module.exports = router;