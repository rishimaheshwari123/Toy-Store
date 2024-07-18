const express = require('express');
const router = express.Router();
const {
    createCategory,
    getAllCategories,
    getCategoryById,
    deleteCategory
} = require("../controllers/category");

// Categories routes
router.post('/create', createCategory); // Create a new category
router.delete('/delete/:id', deleteCategory); // Delete a category by ID
router.get('/all', getAllCategories); // Get all categories with populated subCategories
router.get('/:id', getCategoryById); // Get a single category by ID with populated subCategories

module.exports = router;
