import mongoose from "mongoose";
const addProductSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productImage: {
    data: Buffer,
    contentType: String,
  },
});

const AdminAddProductModel= mongoose.model('adminaddprodcuts',addProductSchema)
export default AdminAddProductModel;