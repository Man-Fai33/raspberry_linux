const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors')
//setting
var morgan = require('morgan');




//data model


var UserRouter = require('./routers/users')
var CvRouter = require('./routers/cv')
const app = express();
const port = 3020;



// MongoDB 连接字符串
const dbURI = 'mongodb://manfai:mf330@localhost:27017/shopmanagement_react';
// const dbURI = 'mongodb://localhost:27017/shopmanagement_react';
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



//allow other device access
app.use(cors())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT , POST, PATCH, DELETE , GET');
    return res.status(200).json({});
  }
  next();
})

//body parser
// These must be placed under body parser!!!
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));



app.use('/api/cv', CvRouter)
app.use('/api/user', UserRouter)

//error handle 
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  const remoteAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(remoteAddress)
  next(error);
});

//send back error object as json
app.use((error, req, res, next) => {
  console.error(error);
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});


module.exports = app;