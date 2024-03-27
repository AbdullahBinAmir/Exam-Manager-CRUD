const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  title: String,
  thumbnail: String,
  examDate: Date,
  questions: [{
    question: String,
    options: [String],
    correctOption: String,
    domain: String,
    subdomain: String,
    topic: String,
    subtopic: String,
  }]
});

module.exports = mongoose.model('Exam', examSchema);