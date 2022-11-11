const express = require('express');
const router = express.Router();
const {
  bookTickets,
  getAllBookings,
  removeBookById,
  getAllBookingByEmail,
} = require('../controllers/blogsController');

router.post('/bookTickets', bookTickets);
router.get('/getAllBookings', getAllBookings);
router.delete('/removeBookById/:id', removeBookById);
router.post('/getBookingByEmail', getAllBookingByEmail);

module.exports = router;
