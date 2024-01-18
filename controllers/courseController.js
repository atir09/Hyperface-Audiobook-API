
const {Course} = require('../models/Course');

// CRUD operations for Course
// Creating a Course
const createCourse = async (req, res) => {
  try {
    const {title,instructor,length,description,coverImage,contents}=req.body
    const course = new Course({title,instructor,length,description,coverImage,contents})

    await course.save()
    res.status(201).send({message:"Course Created Successfully",course});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all Courses
const getCourses = async (req, res) => {
    try {
      const courses = await Course.find().populate('contents');
      res.status(200).send({message:"Retrieved Course Successfully",courses});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// Getting A Course Detail
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId).populate('contents');
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).send({message:"Retrieved Course Successfully",course});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCourse = async (req, res) => {
    try {
      const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, { new: true });
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.status(200).send({message:"Course Details Updated",course});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const deleteCourse = async (req, res) => {
    try {
      const course = await Course.findByIdAndDelete(req.params.courseId);
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  // Add audiobooks functionality
const addAudiobookToCourse = async (req, res) => {
  try {
    const {audiobookId}=req.body
    const course = await Course.findByIdAndUpdate(
      req.params.courseId,
      { $addToSet: { contents: audiobookId } },
      { new: true }
    ).populate('contents');

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.status(200).send({message:"Audiobook Added to course successfully",course});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeAudiobookFromCourse = async (req, res) => {
  try {
    const {audiobookId}=req.body
    const course = await Course.findByIdAndUpdate(
      req.params.courseId,
      { $pull: { contents: audiobookId } },
      { new: true }
    ).populate('contents');

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.status(200).send({message:"Audiobook Removed from course successfully",course});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCourse,
  getCourseById,
  getCourses,
  updateCourse,
  deleteCourse,
  addAudiobookToCourse,
  removeAudiobookFromCourse
  
};
