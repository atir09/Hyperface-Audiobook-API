
const {Audiobook} = require('../models/Audiobook');

// CRUD operations for Audiobook
const createAudiobook = async (req, res) => {
  try {
    const {title,author,narrator,length,categories,summary,coverImage,audioFileURL}=req.body
    const audiobook = new Audiobook({title,author,narrator,length,categories,summary,coverImage,audioFileURL})
    await audiobook.save()
    res.status(201).send({message:"AudioBook Created Successfully",audiobook});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Audio Books
const getAudiobooks = async (req, res) => {
  try {
    const audiobooks = await Audiobook.find();
    res.status(200).send({message:"Retrieved All Audio Books",audiobooks});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAudiobookById = async (req, res) => {
  try {
    const audiobook = await Audiobook.findById(req.params.audiobookId);
    if (!audiobook) {
      return res.status(404).json({ message: 'Audiobook not found' });
    }
    res.status(200).send({message:"Retrieved Audio Book",audiobook});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAudiobook = async (req, res) => {
  try {
    const audiobook = await Audiobook.findByIdAndUpdate(req.params.audiobookId, req.body, { new: true });
    if (!audiobook) {
      return res.status(404).json({ message: 'Audiobook not found' });
    }
    res.status(200).send({message:"Updated Audio Book",audiobook});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAudiobook = async (req, res) => {
  try {
    const audiobook = await Audiobook.findByIdAndDelete(req.params.audiobookId);
    if (!audiobook) {
      return res.status(404).json({ message: 'Audiobook not found' });
    }
    res.status(200).json({ message: 'Audiobook deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createAudiobook,
  getAudiobooks,
  getAudiobookById,
  updateAudiobook,
  deleteAudiobook,
};
