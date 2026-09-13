const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },

    category: {
      type: String,
    },

    price: {
      type: Number,
    },

    image: {
      type: String,
    },

  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model("Product", productSchema, "allProducts");

module.exports = Product;
