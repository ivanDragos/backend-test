const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  field: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Course', courseSchema);
