
const express = require('express');
const courseRouter = express.Router();
const courseController = require('../controllers/courseController');

// Course routes
courseRouter.post('/', courseController.createCourse);
courseRouter.get('/', courseController.getCourses);
courseRouter.get('/:courseId', courseController.getCourseById);
courseRouter.put('/:courseId', courseController.updateCourse);
courseRouter.delete('/:courseId', courseController.deleteCourse);

// Audiobooks functionality
courseRouter.post('/:courseId/audiobooks', courseController.addAudiobookToCourse);
courseRouter.delete('/:courseId/audiobooks', courseController.removeAudiobookFromCourse);

module.exports = {courseRouter};
