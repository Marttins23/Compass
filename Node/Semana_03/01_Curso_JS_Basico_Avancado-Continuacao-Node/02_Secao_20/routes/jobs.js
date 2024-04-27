const express = require('express');
const router = express.Router();
const JobsController = require('../controllers/JobsController');

//add via post
router.post('/add', JobsController.handleAddJobRequest);
router.get('/add', JobsController.showAddJobFormView);
router.get('/view/:id', JobsController.showJobById)

module.exports = router;