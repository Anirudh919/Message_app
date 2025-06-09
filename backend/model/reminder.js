const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  method: {
    type: String,
    enum: ['email', 'sms'],
    required: true,
  },
});

module.exports = mongoose.model('Reminder', reminderSchema);
