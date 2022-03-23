const express = require('express');
const { body } = require('express-validator/check');

const feedController = require('../controllers/feed')

const router = express.Router();

// GET /feed/posts
router.get('/menu', feedController.getMenu);

// GET /feed/staff
router.get('/staff', feedController.getStaff);

module.exports = router;