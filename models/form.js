// models/form.js
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  label: { type: String, required: true },
  type: { type: String, required: true }
});

module.exports = mongoose.model('Form', formSchema);
