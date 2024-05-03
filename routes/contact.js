const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact');

router.get('/', contactController.getContact);

module.exports = router