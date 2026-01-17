const express = require('express');
const router = express.Router();
const trainerController = require('../controllers/trainerController');
const auth = require('../middleware/authMiddleware');

// @route   GET api/trainer/courses (For CourseManager.jsx)
router.get('/courses', auth, trainerController.getMyCourses);
router.post('/courses', auth, trainerController.createCourse);

// @route   POST api/trainer/content (For ContentManager.jsx)
router.post('/content', auth, trainerController.addLesson);

// @route   POST api/trainer/tasks (For TaskManager.jsx)
router.post('/tasks', auth, trainerController.createTask);

// @route   GET api/trainer/grades (For StudentGrades.jsx)
router.get('/grades', auth, trainerController.getStudentGrades);

// @route   GET api/trainer/feedback (For FeedbackReview.jsx)
router.get('/feedback', auth, trainerController.getFeedback);

module.exports = router;
