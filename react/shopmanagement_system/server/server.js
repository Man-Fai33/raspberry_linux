const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// MongoDB 连接字符串
const dbURI = 'mongodb://manfai:mf330@localhost:27017/shopmanagement_react';


// 用户数据模型
const User = mongoose.model('User', {
  name: String,
  age: Number,
  email: String
});

// 连接到 MongoDB
mongoose.connect(dbURI)
  .then(() => {
    console.log('Connected to MongoDB');
    // 启动服务器
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));

// 中间件和路由
app.use(express.json());

// 获取 shopemanagement_react 数据库中的所有用户数据
app.get('/users', async (req, res) => {
  try {
    // 从数据库中获取所有用户数据
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).send('Error fetching users');
  }
});

// 处理 404
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});