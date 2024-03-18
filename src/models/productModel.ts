import { Schema, model } from "mongoose";

const productSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required!"],
    maxlength: 50,
  },
  description: {
    type: String,
    required: [true, "Descriprtion is required!"],
    maxLength: 256,
  },
  category: {
    type: String,
    required: [true, "Category field cannot be empty"],
  },
  price: {
    type: String,
    required: [true, "Price field cannot be empty"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
});

export default model("Product", productSchema);
