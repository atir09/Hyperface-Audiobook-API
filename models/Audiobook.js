
const mongoose = require('mongoose');

const audiobookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  narrator: { type: String, required: true },
  length: { type: Number, required: true },
  categories: [{ type: String }],
  summary: { type: String },
  coverImage: { type: String, required: true },
  audioFileURL: { type: String, required: true },
});

const Audiobook = mongoose.model('Audiobook', audiobookSchema);

module.exports = {Audiobook};
