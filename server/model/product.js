// models/News.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  subCategory: {
    type: Schema.Types.ObjectId,
    ref: 'SubCategory',
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  images: [
    {
      public_id: String,
      url: String,
    },
  ],


  // type: {
  //   type: String,
  // },



});

const News = mongoose.model('Product', productSchema);

module.exports = News;
