/*
 * @Author: Haopei Xie
 * @Date: 2020-12-20 20:24:08
 * @LastEditTime: 2020-12-20 21:15:16
 * @LastEditors: Haopei Xie
 * @Description: 标签路由模块
 * @FilePath: \We-arts\server\routes\tag.js
 * @
 */
const express = require('express');
const router = express.Router();
const controller = require('../controllers/tagController');

router.get('/getTags', controller.getTags);
router.post('/addTag', controller.addTag);
router.get('/deleteTagById/:id', controller.deleteTagById);
router.post('/updateTag', controller.updateTag);

module.exports = router;