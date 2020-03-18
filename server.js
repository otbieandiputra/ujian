const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors');
const url = process.env.MONGODB_URL || 'mongodb://localhost:27017/test';
const router = require ('./routes/expense.router.js')
const connect = async () => {
  //db first
  try {
    await mongoose.connect(`${url}`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
    console.log('database connected successfully...');
  } catch (error) {
    console.log(`Connect database failed. error: ${error}`);
    process.exit();
  }

  app.listen(3000, function () {
    console.log('server is running 3000')
  })

  app.use(bodyParser.json());
  app.set('view engine', 'ejs')
  app.use(express.static('public'))
  app.use(cors('combined'));
 
  router(app)
}


connect()
