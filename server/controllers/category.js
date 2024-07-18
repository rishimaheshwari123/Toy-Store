const Category = require("../model/category");
const SubCategory = require("../model/subCategory");

// Create a new category
const createCategory = async (req, res) => {
  console.log(req)
  const { name } = req.body;
  try {
    const newCategory = new Category({
      name,
      subCategories: [],
    });
    await newCategory.save();
    res
      .status(201)
      .json({
        success: true,
        message: "Category created successfully",
        category: newCategory,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


const deleteCategory = async (req, res) => {
  console.log(req)
  const { id } = req.params;
  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    if (!deletedCategory) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }
    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
      category: deletedCategory,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// Get all categories with populated subCategories
const getAllCategories = async (req, res) => {
  try {
    // Fetch categories and populate subCategories and products
    const categories = await Category.find().populate({
      path: 'subCategories',
      populate: {
        path: 'product', // Populate products in subCategories
        model: 'Product',
      },
    }).populate('product').lean();

    // Function to get random elements from an array
    const getRandomElements = (arr, num) => {
      const shuffled = arr.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
    };

    // Select a random subset of categories, e.g., 3 random categories
    const randomCategories = getRandomElements(categories, 3);

    res.json({
      success: true,
      categories,
      randomCategories,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// Get a single category by ID with populated subCategories
const getCategoryById = async (req, res) => {
  const categoryId = req.params.id;

  try {
    // Fetch the requested category with populated subCategories and products
    const category = await Category.findById(categoryId)
      .populate("subCategories")
      .populate("product"); // Changed to 'product' to match schema field name

    if (!category) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }

    // Fetch multiple random categories
    const categories = await Category.find({ _id: { $ne: categoryId } })
      .limit(5) // Adjust the limit as per your requirement
      .populate("subCategories")
      .populate("product") // Changed to 'product' to match schema field name
      .lean(); // Use lean() for better performance if you don't need to modify the documents

    // Prepare the response object
    const response = {
      success: true,
      category,
      randomCategory: categories
    };

    // Send the response
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};




const toggleActive = async (req, res) => {
  const { categoryId, activeStatus } = req.body;


  try {
    const category = await Category.findByIdAndUpdate(categoryId, { active: activeStatus }, { new: true });
    if (!category) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }
    res.json({ success: true, message: 'Category activated successfully', category });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};




const createSubCategory = async (req, res) => {
  // console.log(req)
  const { name, description, category } = req.body;
  try {
    const newSubCategory = new SubCategory({ name, description, category });
    await newSubCategory.save();

    // Add subcategory reference to the corresponding category
    await Category.findByIdAndUpdate(category, { $push: { subCategories: newSubCategory._id } });

    res.status(201).json({ success: true, message: 'SubCategory created successfully', subCategory: newSubCategory });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};



const deleteSubCategory = async (req, res) => {
  console.log(req)
  const { id } = req.params;
  try {
    const deletedCategory = await SubCategory.findByIdAndDelete(id);
    if (!deletedCategory) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }
    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
      category: deletedCategory,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// Get all subcategories
const getAllSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find().populate('category');

    // console.log(subCategories);

    res.json({ success: true, subCategories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get subcategories for a specific category
const getSubCategoriesByCategory = async (req, res) => {
  const categoryId = req.params.id;
  try {
    const subCategories = await SubCategory.findById(categoryId)
      .populate("product")
      .populate({
        path: "category",
        select: "Product" // Specify the fields you want to select
      });

    const categories2 = await Category.find().populate("subCategories").populate("product").lean();;


    // Function to get random elements from an array
    const getRandomElements = (arr, num) => {
      const shuffled = arr.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
    };

    // Select a random subset of categories, e.g., 3 random categories
    const randomCategories = getRandomElements(categories2, 3);


    res.json({ success: true, subCategories, randomCategories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};




module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  toggleActive,
  deleteCategory,


  createSubCategory,
  getAllSubCategories,
  getSubCategoriesByCategory,
  deleteSubCategory
};
