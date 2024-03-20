import { Schema, model } from "mongoose";

const productSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required!"],
    maxlength: 250,
  },
  description: {
    type: String,
    required: [true, "Descriprtion is required!"],
  },
  category: {
    type: String,
    required: [true, "Category field cannot be empty"],
  },
  image: {
    type: String,
  },
  price: {
    type: String,
    required: [true, "Price field cannot be empty"],
  },
  rating: {
    type: Number,
  },
});

export default model("Product", productSchema);
