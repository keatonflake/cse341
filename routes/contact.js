const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact');

router.get('/', contactController.getAllContacts);

router.get('/:id', contactController.getContactById);

module.exports = router