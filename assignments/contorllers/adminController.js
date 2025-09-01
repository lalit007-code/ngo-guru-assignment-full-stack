import { asyncHandler } from "../utils/AsyncHanlder.js";

import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Product } from "../models/productModel.js";

const adminData = asyncHandler(async (req, res) => {
  console.log("request reached");
  const { title, description, price } = req.body;

  if ([title, description, price].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const product = await Product.create({
    title,
    description,
    price,
  });
  if (!product) {
    throw new ApiError(400, "error occured while creatin product");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, product, "Admin page,data has been inserted"));
});

export { adminData };
