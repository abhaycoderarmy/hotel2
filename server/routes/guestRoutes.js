const express = require('express');
const router = express.Router();
const guestController = require('../controllers/guestController');

router.get('/', guestController.getAllGuests);

module.exports = router;
