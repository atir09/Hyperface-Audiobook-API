
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  instructor: { type: String},
  length: { type: Number },
  description: { type: String },
  coverImage: { type: String },
  contents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Audiobook' }],
});

const Course = mongoose.model('Course', courseSchema);

module.exports = {Course};
