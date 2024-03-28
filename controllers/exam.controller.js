// routes/examRoutes.js
const Exam = require('../models/Exam.model');

// Create a new exam
exports.addExam = async (req, res) => {
  try {
    const exam = await Exam.create(req.body);
    res.status(201).json({ exam , message:'Success'});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Get all exams
exports.getAllExams = async (req, res) => {
  try {
    const exams = await Exam.find();
    res.json({ exams });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get a specific exam by ID
exports.getExamById = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    if (!exam) throw new Error('Exam not found');
    res.json({ exam });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

// Update an exam
exports.updateExam = async (req, res) => {
  try {
    const exam = await Exam.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!exam) throw new Error('Exam not found');
    res.json({ exam, message:'updated successfully' });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

// Delete an exam
exports.deleteExam = async (req, res) => {
  try {
    const exam = await Exam.findByIdAndDelete(req.params.id);
    if (!exam) throw new Error('Exam not found');
    res.json({ message: 'Exam deleted successfully' });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}