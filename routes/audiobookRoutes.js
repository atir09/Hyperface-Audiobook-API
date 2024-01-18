// routes/audiobookRoutes.js

const express = require('express');
const AudioBookRouter = express.Router();
const audiobookController = require('../controllers/audiobookController');

// Audiobook routes
AudioBookRouter.post('/', audiobookController.createAudiobook);
AudioBookRouter.get('/', audiobookController.getAudiobooks);
AudioBookRouter.get('/:audiobookId', audiobookController.getAudiobookById);
AudioBookRouter.put('/:audiobookId', audiobookController.updateAudiobook);
AudioBookRouter.delete('/:audiobookId', audiobookController.deleteAudiobook);



module.exports = {AudioBookRouter};
