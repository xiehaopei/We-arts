/*
 * @Author: Haopei Xie
 * @Date: 2020-11-30 21:54:20
 * @LastEditTime: 2020-12-05 17:08:12
 * @LastEditors: Haopei Xie
 * @Description: 用户模块路由
 * @FilePath: \We-arts\server\routes\user.js
 * @
 */

const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController')

router.get('/getUserList', controller.getUserList);
router.post('/addUser', controller.addUser)

module.exports = router;
