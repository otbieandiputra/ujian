const expense = require('../models/expense.model.js');
 
const master = async (req, res) => {
 try {
  res.render('master')
 } catch (error) {
   res.status(500).json({
     message: 'Error: ' + error
   })
 }
}

const get = async (req, res) => {
 try {
    await expenses(req, res);
 } catch (error) {
   res.status(500).json({
     message: 'Error: ' + error
   })
 }
}

const post = async (req, res) => {
 try {
   const newExpense = new expense({
     Tanggal: req.body.Tanggal,
     Kategori: req.body.Kategori,
     Detail: req.body.Detail,
     Total: req.body.Total
   });
   await newExpense.save();
   await expenses(req, res);

 } catch (error) {
   res.status(500).json({
     message: 'Error: ' + error
   })
 }
}

const del = async (req, res) => {
 try {
   await expense.findByIdAndDelete(req.body._Id);
   await expenses(req, res);
 } catch (error) {
   res.status(500).json({
     message: 'Error: ' + error
   })
 }
}

const put = async (req, res) => {
 try {
   await expense.findByIdAndUpdate(req.body._Id, { $set: req.body });
   await expenses(req, res);
 } catch (error) {
   res.status(500).json({
     message: 'Error: ' + error
   })
 }
}

const expenses = async (req, res) => {
 const data = await expense.find({});
 res.send(data)
}

module.exports = { put,post,del,get,master}