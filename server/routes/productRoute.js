const express = require('express');
const router = express.Router();
const {
  createNews,
  getAllNews,
  deleteNewsById,
  getNewsById,
} = require('../controllers/product');



router.post('/create', createNews);



router.get('/all', getAllNews);

router.delete('/delete', deleteNewsById);

router.get('/:newsId', getNewsById);






module.exports = router;
