const express = require('express');
const router = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
router.get('/', lesson1Controller.kayleeRoute)

module.exports = router