const mongoose = require('mongoose');
const expenses = mongoose.Schema(
  {
    Tanggal: { type: Date },
    Kategori: { type: String},
    Detail: String,
    Total: { type: Number }
  },
  { 
    timestamps: true
  }
);
module.exports = mongoose.model('expenses',expenses);