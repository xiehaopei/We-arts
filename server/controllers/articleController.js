const Article = require('../models/article.js');

const getArticleList = async (req, res) => {
  const result = await Article.find((err, res) => {
    if (err) console.log(err)
    else console.log(res)
  }).sort({ time: -1 })
  res.send(result)
}

const getArticleById = async (req, res) => {
  try {
    const result = await Article.findById(req.params.id);
    res.send(result);
  } catch (error) {
    throw error
  }
}

const createArticle = async (req, res) => {
  try {
    const params = {
      title: req.body.title,
      words: req.body.words,
      content: req.body.content,
      describe: req.body.describe,
      contentHtml: req.body.contentHtml,
      time: req.body.time,
      like: req.body.like,
      read: req.body.read,
      image: req.body.image,
      tags: req.body.tags
    }
    const article = new Article(params);
    const result = await article.save(function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log('Save success');
      }
    });
    res.send(result);
  } catch (error) {
    throw error;
  }
}

const deleteArticleById = async (req, res) => {
  try {
    const result = await Article.findByIdAndDelete(req.params.id);
    res.send(result);
  } catch (error) {
    throw error;
  }
}

const getArticleListByTag = async (req, res) => {
  try {
    const result = await Article.find({ tags: req.params.tag })
    res.send(result)
  } catch (error) {
    throw error
  }
}

module.exports = { getArticleList, getArticleById, createArticle, deleteArticleById, getArticleListByTag }
