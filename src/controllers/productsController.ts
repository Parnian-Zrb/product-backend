import Products from "../models/productModel";
import { Request, Response } from "express";

export const getAllProducts = async (req: any, res: any) => {
  try {
    const data = await Products.find();

    res.status(200).json({
      status: "success",
      results: data.length,
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const addProduct = async (req: any, res: any) => {
  try {
    const newProduct = await Products.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const data = await Products.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const data = await Products.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
