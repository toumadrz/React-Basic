const mongoose = require('mongoose');


const dataSchema = new mongoose.Schema({
  Id: { type: String, required: [true,'Please provide Id'] },
  Name: { type: String, required: [true,'Please provide Name']},
  Amount: { type: Number, required: [true,'Please provide Amount'] },
  DateCreate: { type: Number, default: () => Date.now() },
});


const Data = mongoose.model('Data', dataSchema);

module.exports = Data;