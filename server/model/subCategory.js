// models/SubCategory.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },

  product: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],


});

const SubCategory = mongoose.model('SubCategory', subCategorySchema);

module.exports = SubCategory;
