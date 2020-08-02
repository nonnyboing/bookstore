const express = require('express');
const router = express.Router();

const bookCtrl = require('../contollers/books')
const auth = require('../middleware/auth');
const Book = require('../models/books');

router.post('/', auth, bookCtrl.addBook);

router.delete('/:id', auth, bookCtrl.deleteBook);

router.get('/', bookCtrl.getBook);



module.exports = router;