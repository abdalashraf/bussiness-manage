


import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  
  productDescription: {
    type: String,
    required: true,
  },
  productSalePrice: {
    type: String,
    required: true,
  },
  productCostPrice: {
    type: String,
    required: true,
  },
  productQunatity: {
    type: String,
    required: true,
  },
  productSize: {
    type: String,
    required: true,
  }
  ,productColor: {
    type: String,
    required: true,
  },
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
