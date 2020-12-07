/*
 * @Author: Haopei Xie
 * @Date: 2020-11-30 21:54:20
 * @LastEditTime: 2020-12-07 23:55:38
 * @LastEditors: Haopei Xie
 * @Description: 用户模块路由
 * @FilePath: \We-arts\server\routes\user.js
 * @
 */

const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController')

router.get('/getUserList', controller.getUserList);
router.post('/addUser', controller.addUser);
router.post('/findUser', controller.findUser);
router.post('/deleteUser', controller.deleteUser)

module.exports = router;
