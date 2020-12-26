const Article = require('../models/article.js');
const fs = require('fs');
const path = require('path');

const getArticleList = async (req, res) => {
  try {
    const params = {
      pageSize: req.query ? parseInt(req.query.pageSize) : null,
      pageNum: req.query ? parseInt(req.query.pageNum) : null
    }
    const count = await Article.countDocuments();
    const result = await Article.find().populate('tags').sort({ time: -1 }).skip((params.pageNum - 1) * params.pageSize).limit(params.pageSize)
    res.json({
      total: count,
      data: result,
      meta: { msg: '获取成功！', status: 200 }
    })
  } catch (error) {
    throw new Error(error)
  }
}

const getArticleById = async (req, res) => {
  try {
    const result = await Article.findById(req.params.id);
    result.time = getTime(result.time);
    res.json({
      data: result,
      meta: { msg: '获取成功！', status: 200 }
    })
  } catch (error) {
    throw error
  }
}

const createArticle = async (req, res) => {
  try {
    const params = {
      title: req.body.title,
      content: req.body.content,
      describe: req.body.describe,
      contentHtml: req.body.contentHtml,
      time: req.body.time,
      like: req.body.like,
      read: req.body.read,
      image: req.body.image,
      tags: req.body.tags,
      isPublic: req.body.isPublic
    }
    const article = new Article(params);
    await article.save(function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log('Save success');
      }
    });
    res.json({
      meta: { msg: '添加成功！', status: 200 }
    })
  } catch (error) {
    throw error;
  }
}

const deleteArticleById = async (req, res) => {
  try {
    const result = await Article.findByIdAndDelete(req.params.id);
    res.json({
      data: result,
      meta: { msg: '获取成功！', status: 200 }
    })
  } catch (error) {
    throw error;
  }
}

const getArticleListByTag = async (req, res) => {
  try {
    const result = await Article.find({ tags: { _id: req.params.id } }).populate('tags').sort({ time: -1 })
    res.json({
      data: result,
      meta: { msg: '获取成功！', status: 200 }
    })
  } catch (error) {
    throw error
  }
}

const fileUpload = (req, res) => {
  const extname = path.extname(req.file.originalname);
  const newPath = req.file.path + extname;
  fs.rename(req.file.path, newPath, function (err) {
    if (err) {
      res.json({ meta: { msg: '上传失败' } })
    } else {
      res.json({
        data: req.file,
        meta: { msg: '上传成功' }
      })
    }
  })
}

module.exports = { getArticleList, getArticleById, createArticle, deleteArticleById, getArticleListByTag, fileUpload }
