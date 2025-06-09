const express = require('express');
const router = express.Router();
const Reminder = require('../model/reminder');

router.post('/', async (req, res) => {
  try {
    const { date, time, message, method } = req.body;
console.log(date)
    if (!date || !time || !message || !method) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const reminder = new Reminder({ date, time, message, method });
    await reminder.save();

    res.status(201).json({ message: 'Reminder saved successfully' });
  } catch (error) {
    console.error('Error saving reminder:', error); 
    res.status(500).json({ error: 'Failed to save reminder' });
  }
});

module.exports = router;
