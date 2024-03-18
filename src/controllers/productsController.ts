import Products from "../models/productModel";

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
