const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const remindersRoute = require('./routes/reminder.js');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://anirudhkashyap67:oodles123@carmodel.ck38shw.mongodb.net/?retryWrites=true&w=majority&appName=CarModel', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(bodyParser.json());

app.use('/api/reminders', remindersRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
