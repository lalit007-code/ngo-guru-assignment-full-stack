import { asyncHandler } from "../utils/AsyncHanlder.js";
import { Product } from "../models/productModel.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { withCache } from "../utils/cache.js";

export const productList = asyncHandler(async (req, res) => {
  const {
    page = 1,
    limit = 10,
    search = "",
    sortBy = "createdAt",
    order = "desc",
  } = req.query;

  const cacheKey = `products:${page}:${limit}:${search}:${sortBy}:${order}`;

  const { fromCache, data } = await withCache(cacheKey, async () => {
    const query = {
      $or: [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ],
    };

    const sortQuery = { [sortBy]: order === "asc" ? 1 : -1 };

    const products = await Product.find(query)
      .sort(sortQuery)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Product.countDocuments(query);

    return {
      products,
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    };
  });

  const message = fromCache ? "Fetched from cache" : "Product list";
  res.status(200).json(new ApiResponse(200, data, message));
});

export const updateProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const updateData = req.body;

  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    updateData,
    {
      new: true,
    }
  );

  if (!updatedProduct) {
    return res
      .status(404)
      .json(new ApiResponse(404, null, "Product not found"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, updatedProduct, "Product updated successfully"));
});

export const deleteProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params;

  const deletedProduct = await Product.findByIdAndDelete(productId);

  if (!deletedProduct) {
    return res
      .status(404)
      .json(new ApiResponse(404, null, "Product not found"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, deletedProduct, "Product deleted successfully"));
});
