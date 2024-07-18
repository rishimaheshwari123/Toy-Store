// controllers/newsController.js
const News = require('../model/product')
const Category = require('../model/category');
const SubCategory = require('../model/subCategory');

const validateCategory = async (categoryId) => {
  return await Category.exists({ _id: categoryId });
};

// Function to validate subcategory ID
const validateSubCategory = async (subcategoryId) => {
  return await SubCategory.exists({ _id: subcategoryId });
};

// Function to check if all required fields are present
const validateRequiredFields = (req) => {
  const {
    title,
    description,
    category,
    subCategory,
    price,
    images,
  } = req.body;

  // console.log(req.body);

  if (!title || !category || !subCategory || !description || !images || !price) {
    return false;
  }
  return true;
};

// Create a new news article
const createNews = async (req, res) => {
  if (!validateRequiredFields(req)) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  const {
    title,
    description,
    category,
    subCategory,
    price,
    images,
  } = req.body;

  // Parse images array from JSON string to JavaScript object if it's a string
  const imagesArray = typeof images === 'string' ? JSON.parse(images) : images;

  try {
    // Validate category ID
    const isValidCategory = await validateCategory(category);
    if (!isValidCategory) {
      return res.status(400).json({ success: false, message: 'Invalid category ID' });
    }

    // Validate subcategory ID
    const isValidSubCategory = await validateSubCategory(subCategory);
    if (!isValidSubCategory) {
      return res.status(400).json({ success: false, message: 'Invalid subcategory ID' });
    }

    // Create new news entry
    const newNews = new News({
      title,
      description,
      category,
      subCategory,
      price,
      images: imagesArray, // Use the parsed array here
    });

    await newNews.save();

    // Update Category with new Product ID
    await Category.findByIdAndUpdate(
      { _id: category },
      {
        $push: { product: newNews._id }, // Ensure the field name matches the model
      },
      { new: true }
    );

    // Update SubCategory with new Product ID
    await SubCategory.findByIdAndUpdate(
      { _id: subCategory },
      {
        $push: { product: newNews._id }, // Ensure the field name matches the model
      },
      { new: true }
    );

    res.status(201).json({ success: true, message: 'News article created successfully', news: newNews });
  } catch (error) {
    console.error('Error creating news:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};






const getAllNews = async (req, res) => {
  try {
    const news = await News.find()
      .populate('category', 'name')
      .populate('subcategory', 'name')
      .exec();

    res.json({ success: true, news });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Function to delete a news article by ID
const deleteNewsById = async (req, res) => {
  const newsId = req.body.id;

  try {
    const deletedNews = await News.findByIdAndDelete(newsId);

    console.log(deletedNews)
    if (!deletedNews) {
      return res.status(404).json({ success: false, message: 'News article not found' });
    }


    // Remove news article ID from Category
    await Category.findByIdAndUpdate(
      { _id: deletedNews.category },
      {
        $pull: {
          Product: deletedNews._id,
        },
      }
    );

    // Remove news article ID from SubCategory
    await SubCategory.findByIdAndUpdate(
      { _id: deletedNews.subCategory },
      {
        $pull: {
          Product: deletedNews._id,
        },
      }
    );



    return res.status(200).json({ success: true, message: 'News article deleted successfully' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: error.message });
  }
};

const getNewsById = async (req, res) => {
  const newsId = req.params.newsId;
  // console.log(newsId)
  try {
    const news = await News.findById(newsId)

      .populate({
        path: 'subCategory',
        populate: { path: 'product' } // Populate subcategory and include all news
      })
      .populate({
        path: 'category',
        populate: { path: 'product' } // Populate subcategories and include all news

      })

    if (!news) {
      return res.status(404).json({ success: false, message: 'News article not found' });
    }

    res.json({ success: true, news });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
















module.exports = {
  createNews,
  getAllNews,
  deleteNewsById,
  getNewsById,
};
