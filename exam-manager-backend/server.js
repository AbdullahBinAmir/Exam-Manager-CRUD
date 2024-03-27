require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// routes
require("./routes/exam.routes")(app);

process.on('uncaughtException', function (err) {
  console.error(err);
  console.log("Restarting...");
});

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Connection Error:', err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));