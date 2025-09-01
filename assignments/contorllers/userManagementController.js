import { asyncHandler } from "../utils/AsyncHanlder.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/userModel.js";

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).select("-password -refreshToken");
  return res.status(200).json(new ApiResponse(200, users, "Users fetched successfully"));
});

const updateUserRole = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const { role } = req.body;

  const user = await User.findByIdAndUpdate(
    userId,
    { role },
    { new: true }
  ).select("-password -refreshToken");

  if (!user) {
    return res.status(404).json(new ApiResponse(404, null, "User not found"));
  }

  return res.status(200).json(new ApiResponse(200, user, "User role updated successfully"));
});

export { getAllUsers, updateUserRole };