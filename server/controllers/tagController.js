const Tag = require('../models/tag');

const getTags = async (req, res) => {
  try {
    const result = await Tag.find();
    res.json({
      data: result,
      meta: { msg: '获取成功!', status: 200 }
    })
  } catch (error) {
    throw new Error(error);
  }
};

const addTag = async (req, res) => {
  try {
    const params = {
      tagName: req.body.tagName,
    };
    const tag = new Tag(params);
    const result = await tag.save();
    res.json({
      data: result,
      meta: { msg: '添加成功！', status: 200 }
    })
  } catch (error) {
    throw new Error(error);
  }
};

const deleteTag = async (req, res) => {
  try {
    await Tag.findOneAndRemove({ tagName: req.body.tagName })
    res.json({
      meta: { msg: '删除成功！', status: 200 }
    })
  } catch (error) {
    throw new Error(error);
  }
};

const updateTag = async (req, res) => {
  try {
    const id = req.body.id;
    const params = {
      tagName: req.body.tagName,
    }
    const result = await Tag.findByIdAndUpdate(id, params);
    res.json({
      data: { id, ...params },
      meta: { msg: '更新成功！', status: 200 }
    })
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getTags, addTag, deleteTag, updateTag };