const User = require('../models/user.js');

const getUserList = async (req, res) => {
  try {
    const result = await User.find();
    res.send(result)
  } catch (error) {
    throw new Error(error)
  }
}

const addUser = async (req, res) => {
  const params = {
    username: req.body.username,
    password: req.body.password,
    authority: req.body.authority
  }
  try {
    const user = new User(params);
    const result = await user.save();
    res.send(result)
  } catch (error) {
    throw new Error(error);
  }
}

const findUser = async (req, res) => {
  const params = {
    username: req.body.username,
    password: req.body.password
  }
  try {
    const result = await User.findOne(params);
    if (result) {
      res.status(200).json({
        data: {
          id: result._id,
          username: result.username,
          password: result.password
        },
        meta: { msg: '登录成功！', status: 200, login:'success' },
      });
    } else {
      res.json({
        meta: { msg: '用户名或密码错误！', status: 200, login:'fail' }
      })
    }
  } catch (error) {
    throw new Error(error);
  }
}

const deleteUser = async (req, res) => {
  try {
    const result = await User.findByIdAndDelete(req.body.id)
    res.send(result)
  } catch (error) {
    throw new Error(error)
  }
}

const updateUser = async (req, res) => {
  const id = req.body.id;
  const params = {
    username: req.body.username,
    password: req.body.password,
    authority: req.body.authority
  }
  try {
    const result = await User.findByIdAndUpdate(id, params)
    res.send(result);
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = { getUserList, addUser, findUser, deleteUser, updateUser }